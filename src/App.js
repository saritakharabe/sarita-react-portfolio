// import logo from './logo.svg';
import About from './component/About'
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Testimonials from './component/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
    </div>
  );
}

export default App;
