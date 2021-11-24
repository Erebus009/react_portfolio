import React from "react";
import anime from "animejs/lib/anime.es.js";
import ReactAnime from "react-animejs";
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
          {
            targets: ".projects",
            translateY: 90,
            translateX: 120,
            opacity: [0, 1],
          },
        ]}
        _onUpdate={[
          {
            targets: ".about-show",
            duration: 3000,
            skew: -40,
            direction: "alternate",
            translateY: function () {
              return anime.random(-10, 200);
            },
            translateX: function () {
              return anime.random(-30, 100);
            },

            loop: true,
            easing: "easeInOutQuad",
            delay: anime.stagger(100, {}),
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
