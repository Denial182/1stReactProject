import React from "react";
import art from '../assets/image1.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>WELCOME TO MY WORLD,<br />WHERE I CREATE<br />BEAUTIFUL THINGS</h1>
        <p>
          "Every canvas holds a story, painted with the heart of Verenthia’s light."
        </p>
        <button>Find out more</button>
      </div>
      <div className="hero-image">
        <img src={art} alt="Art" />
      </div>
    </section>
  );
};

export default Hero;
