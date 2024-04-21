import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import './App.css';
import MainPage from './Components/MainPage';
import Details from './Components/Details';
import Purice from './Components/Purice';
import Andi from './Components/Andi';
import Fane from './Components/Fane';
import Lupu from './Components/Lupu';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* Wrap your Route components within Routes */}
          {/* Use `element` prop instead of `component` in Route */}
          <Route path="/" element={<MainPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/purice" element ={<Purice />} />
          <Route path="/andi" element ={<Andi />} />
          <Route path="/fane" element ={<Fane />} />
          <Route path="/lupu" element ={<Lupu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
