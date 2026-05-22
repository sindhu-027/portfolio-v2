import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import RecruiterMode from "./components/RecruiterMode/RecruiterMode";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="app">

      <div className="bg-glow"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <RecruiterMode />
      <Contact />
    </div>
  );
}

export default App;