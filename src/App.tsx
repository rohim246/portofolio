import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Projects from "./components/Projects/Projects.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Gallery from "./components/Gallery/Gallery.tsx";
import Artifacts from "./components/Artifacts/Artifacts.tsx";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global mesh gradient background */}
      <div className="mesh-gradient fixed inset-0 -z-10" />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Gallery />
        <Artifacts />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;