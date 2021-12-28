import React from "react";
import "./style.css";


function Header(props) {
  return (
    <header>
      <div className="intro-box">
        <div className="intro-left">
          <div className="left-wrapper">
            <h2 className="hello">Hi, My name is</h2>
            <h1 className="intro-name">Travis Puryear</h1>
           <div className="intro-titles">
             <div className="title-wrapper">
               <div className="title-item">Web Developer</div>
               <div className="title-item">Freelancer</div>
               <div className="title-item">Metal Music Fan</div>
             </div>
           </div>
          </div>
        </div>
        <div className="intro-right">
        <div className="bg">

        </div>
          <img src="" alt="" className="image-intro"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
