import About from "./components/about/About";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;
