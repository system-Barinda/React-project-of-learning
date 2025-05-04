import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Service from './components/Service';


const  App = () => {
  return (
    
    <center>
      <Router>
    <div class="App">
       <div class="menu">
        <a href="/"><div class="submenu">Home</div></a>
        <a href="/Service"><div class="submenu">Service</div></a>
        <div class="submenu">Contact</div>
        <div class="submenu">About</div>

       </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </div>

    </Router>
    </center>
     );
}

export default App;
