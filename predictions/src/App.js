import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
}
from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SourceCode from './pages/SourceCode';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={<SourceCode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
