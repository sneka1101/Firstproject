import React from 'react';

import BannerImage  from "./nature.png";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            Enjoy your tour with nature
          </h1>
          <p className="primary-text">
          Enjoy your tour With offer we provide <br/> Book Now Happy Journey!<br></br>
       <button>Learn more</button>
          </p>
          
          
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};
  


export default Home;