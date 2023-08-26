import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route,Routes } from 'react-router-dom';

import '../style/Navbar.css'
import Places from '../pages/Places';
import Home from '../pages/Home';

const Navbar=()=> {
  return (


    

 <header >
      <nav className='navbar navbar-expand-sm'>
        <div className='container'>
          <a className='navbar-brand text-white'><b><h3>TAMILNADU TOURISM</h3></b></a> 
          <ul className='navbar-nav'>
            <Link className='nav-link text-white' to="/Home"><b>Home</b></Link>
            <Link className='nav-link text-white' to="Places"><b>PlaceToVisit</b></Link>
            <a className='nav-link text-white' href=""><b>BestTimeToVisit</b></a>
            <a className='nav-link text-white' href=""><b>Packages</b></a>
            <a className='nav-link text-white' href=""><b>Destination</b></a>
            <a className='nav-link text-white' href=""><b>Food</b></a>
          </ul> 
        </div>
      </nav>
      <Routes>
        <Route path='/Home' element={<Home/> } />
        <Route path="/Places" element={<Places /> } />
      </Routes>
    </header> 

 
  );
}

export default Navbar;




