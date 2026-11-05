import { useEffect, useRef } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

export default function GaussianViewer({
  src = "/assets/itaim-ii.ksplat",
  onLoaded,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !src) return;

    let viewer = null;
    let cancelled = false;
    let disposed = false;
    let loadPromise = null;

    const host = document.createElement("div");

    Object.assign(host.style, {
      width: "100%",
      height: "100%",
      position: "relative",
      backgroundColor: "#000",
    });

    container.appendChild(host);

    async function disposeViewer() {
      if (disposed) return;
      disposed = true;

      try {
        if (viewer) await viewer.dispose();
      } catch (error) {
        console.warn("Dispose:", error);
      } finally {
        host.remove();
      }
    }

    async function init() {
      try {
        viewer = new GaussianSplats3D.Viewer({
          rootElement: host,
          cameraUp: [0, -2, 0],
          initialCameraPosition: [-1.135, -0.462, 0.847],
          initialCameraLookAt: [0, 0, 0],
          sharedMemoryForWorkers: false,
          gpuAcceleratedSort: false,
      });

        viewer.controls.maxPolarAngle = 1.3;
        viewer.controls.minDistance = 0.3;
        viewer.controls.maxDistance = 2.8;
        viewer.controls.enableDamping = false;

        loadPromise = viewer.addSplatScene(src, {
          showLoadingUI: false,
          progressiveLoad: false,
        });

        await loadPromise;

        if (cancelled) return;

        viewer.start();

        console.log("Gaussian Splat cargado correctamente");

        onLoaded?.();
      } catch (error) {
        if (!cancelled) {
          console.error("ERROR GAUSSIAN:", error);
        }
      }
    }

    init();

    return () => {
      cancelled = true;

      if (loadPromise) {
        Promise.resolve(loadPromise)
          .catch(() => {})
          .finally(disposeViewer);
      } else {
        void disposeViewer();
      }
    };
  }, [src, onLoaded]);

  return (
    <div
      ref={containerRef}
      className="gaussian-container"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        background: "#000",
        overflow: "hidden",
      }}
    />
  );
}