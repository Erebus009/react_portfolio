import React from "react";

import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;

function About() {
  return (
    <div className="container.fluid d-flex">
      <Anime
        initial={[
            {
                targets: ".aboutHeaderAnimation",
                translateY: 1100,
                duration: 4000,
                easing:"spring"
            },
            {
                targets: ".slideIn",
                translateY: 1100,
                easing:"spring"
            }
                
          
        ]}
      >
        
       
        
        <div className="container">
        <h1 className="aboutHeaderAnimation">Hello, I am Travis Puryear</h1>
        <p className="slideIn">Full-Stack Developer</p>
        </div>
      </Anime>
    </div>
  );
}

export default About;
