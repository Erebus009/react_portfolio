import React from "react";
import anime from "animejs/lib/anime.es.js";
import ReactAnime from "react-animejs";
import Portfiolo from "../Portfolio";
const { Anime, stagger } = ReactAnime;

function About() {
 

  return (
    <div className="container.fluid d-flex flex-wrap justify-content-center align-items-center flex-coulmns">
      <Anime
        initial={[
          {
            targets: ".aboutHeaderAnimation",
            translateY: 1050,
            duration: 100,

            easing: "spring",
          },
          {
            targets: ".slideIn",
            translateY: 1050,
            translateX: 40,

            easing: "spring",
          },
         
        ]}
        _onUpdate={[
          {
            targets: ".about-show",
            duration: 3000,
            skew: -20,
            direction: "alternate",
            translateY: function () {
              return anime.random(20, 400);
            },
            translateX: function () {
              return anime.random(-50, 90);
            },

            loop: true,
            easing: "easeInOutQuad",
            delay: anime.stagger(90, {}),
          },
        ]}
      >
        <div className="container main-hero mt-5">
          <h1 className="aboutHeaderAnimation display-5">
            Hello, I am Travis Puryear
          </h1>
          <h1 className="slideIn">Full-Stack Developer</h1>
          <div className="container d-flex align-items-center">
            <p className="seeWork text-white display-6"></p>
           
        
          </div>
        </div>
      </Anime>


      
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
      <div className="about-show"></div>
    </div>
  );
}

export default About;
