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
            

            easing: "spring",
          },
          {
            targets: ".slideIn",
            translateY: 1050,
            translateX: 50,
  
            
            easing: "spring",
          },
          
          
        ]}
        _onUpdate={[
          {
            targets: ".about-show",
            background: "#FFF",
            skew:0,
            duration: 20000,
            direction:"alternate",
            loop:true,
            easing: 'easeInOutQuad',
            delay: anime.stagger(10,{
           
              
            }), 
            keyframes: [
              {
                translateX: 0,
                translateY: 50
                
              },
              {
                translateY: -30
              },
              {
                translateY: 50
              },
              {
                translateX: 0
              },
              {
                translateY: -30,
              
              }
            ],
            
            
          }
        ]}
        
      >
        <div className="container main-hero">
          <h1 className="aboutHeaderAnimation display-5">Hello, I am Travis Puryear</h1>
          <h1 className="slideIn">Full-Stack Developer</h1>
          {/* <h1 className="projects"><a href="">See my work here</a></h1> */}
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
