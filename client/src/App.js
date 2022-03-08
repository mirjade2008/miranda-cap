import React from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Attractions from './pages/Attractions';




function App() {

  return (
    
      <Router> 
      <Navbar />
      <Route>   
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/attractions' component={Attractions}/>
      </Route> 
         
      </Router>

  
      
   
  );
}
  

export default App;

