import React from "react";
import artist from '../assets/image.png'
const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={artist} alt="Artist" />
      </div>
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <p>
         I am John, a painter based in the vibrant city of Verenthia, where every sunrise sparks a new vision on my canvas. With a passion for capturing the human spirit, I create portraits and scenes that weave stories through color and light. My work blends the precision of realism with the evocative glow of impressionism, drawing inspiration from the quiet moments of everyday life—be it a street vendor’s weathered hands or a child’s fleeting smile. Each stroke is a journey, reflecting my belief that beauty lies in the truths we often overlook.
         <br />
         <br />
         My studio, perched above Verenthia’s bustling streets, is my haven of creativity, filled with the scent of turpentine and half-finished dreams. I’ve been honored to exhibit across galleries in Europe, with my piece The Starlit Veil earning whispers of awe for its emotional depth. I paint not for fame, but to connect, to preserve the fleeting essence of those I meet. When not wielding a brush, I wander the city’s alleys, sketchbook in hand, seeking the next story to tell. Explore my work, and let’s share in the art of seeing the world anew.


        </p>
      </div>
    </section>
  );
};

export default About;
