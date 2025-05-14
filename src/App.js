import { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold if needed
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
