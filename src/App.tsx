import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

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
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
