import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css';

function About() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>
          Pizza and its variants are among the most popular foods in the world. Pizza is sold at a variety of restaurants, including pizzerias (pizza specialty restaurants), Mediterranean restaurants, via delivery, and as street food. In Italy, pizza served in a restaurant is presented unsliced, and is eaten with the use of a knife and fork. In casual settings, however, it is cut into wedges to be eaten while held in the hand. Pizza is also sold in grocery stores in a variety of forms, including frozen or as kits for self-assembly. They are then cooked using a home oven.In 2017, the world pizza market was US$128 billion, and in the US it was $44 billion spread over 76,000 pizzerias.Overall, 13% of the U.S. population aged two years and over consumed pizza on any given day
          </p>
        </div>
      </div>
    );
  };

export default About;