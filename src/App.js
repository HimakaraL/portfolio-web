import './App.css';
import { NavBar } from './components/NavBar';
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <Skills />
      <Projects/>
      <About/>
    </div>
  );
}

export default App;
