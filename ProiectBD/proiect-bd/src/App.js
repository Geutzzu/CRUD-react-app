import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Constructors from './pages/Constructors.js'; // Add .js extension
import Drivers from './pages/Drivers.js'; // Add .js extension

function App() {
  return (
      <div>
        <Constructors />
      </div>
  ); /// ";" poate nu e necesara 
}

export default App;