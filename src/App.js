import './App.css';
import { NavBar } from './components/NavBar';
import { Intro } from './components/Intro';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
    </div>
  );
}

export default App;
