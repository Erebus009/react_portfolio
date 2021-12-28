import React from 'react'
import "./style.css"
import  mountain from "../../assets/projects/mountainer.jpg"

const About = props => {
    return(
        <div className='about'>
            <div className='about-left'>
                <div className='about-card'>
                    <img
                    src={mountain}
                    alt=""
                    ></img>
                </div>
            </div>
            <div className='about-right'>
                <h1 className='about-title'>About me</h1>
                <p className='about-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    )
}

export default About