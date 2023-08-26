
import './App.css';
import Chennai from './components/Chennai';
import Hogenakal from './components/Hogenakal';
import Kanyakumari from './components/Kanyakumari';
import Kodaikanal from './components/Kodaikanal';
import Kumbakonam from './components/Kumbakonam';
import Madurai from './components/Madurai';
import Navbar from './components/Navbar';
import Ooty from './components/Ooty';
import Rameshwaram from './components/Rameshwaram';
import Slider from './components/Slider';
import Theni from './components/Theni';
import Yercaud from './components/Yercud';
import React from 'react';
// import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Places from './pages/Places';




function App() {
  return (
     <>
     
     <Navbar />
    
    
    <Slider />
       <Chennai />
      <Rameshwaram />
      <Kodaikanal />
    <Ooty />
     <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
     <Theni />
     <Hogenakal />

     

     </>
    
    

  
  );
}

export default App;
