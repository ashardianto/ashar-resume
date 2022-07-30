import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='block'>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
