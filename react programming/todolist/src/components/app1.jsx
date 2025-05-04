import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service';
import  './app.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className='menu'>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Service">Service</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;