import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import './App.css'
import Navbar from './components/navbar/Navbar';
import StudyCase from './components/StudyCase';

const App = () => {

  const [dark, setDark] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );
  useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <BrowserRouter>
    <div id="app">
      <Navbar />
      <div className={`app-wrapper ${dark ? 'dark' : ''}`}>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img src="https://felixgerschau.com/logos/lightbulb.svg" className='btnImg'  alt='/' />
         </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:studySlug" element={<StudyCase />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
