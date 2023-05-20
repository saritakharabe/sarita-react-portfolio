// import logo from './logo.svg';
import About from './component/pages/About'
import Contact from './component/pages/Contact';
import Navbar from './component/Navbar';
import Projects from './component/pages/Projects';
import Skills from './component/pages/Skills';
import Testimonials from './component/pages/Testimonials';
import './App.css';

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
