import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BannerImage from "../assets/vegan.jpg";
import Image1 from "../assets/pineapple.jpg";
import Image2 from "../assets/vegan.jpg";
import Image3 from "../assets/pizzaLeft.jpg";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src={BannerImage} alt="Banner" />
        </div>
        <div>
          <img src={Image1} alt="Pizza 1" />
        </div>
        <div>
          <img src={Image2} alt="Pizza 2" />
        </div>
        <div>
          <img src={Image3} alt="Pizza 3" />
        </div>
      </Carousel>
      <div className="headerContainer">
        <h1> PizzzA </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
