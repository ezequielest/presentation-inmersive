import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Capabilities from "./components/Capabilities";
import Workflow from "./components/Workflow";
import Applications from "./components/Applications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Capabilities />
        {/*<Workflow />*/}
        {/* <Applications />*/}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
