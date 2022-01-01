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
                <p className='about-text'> Web Developer with a background in the electrical field being able to plan and develop from material stage to end of production, bringing a distinctive
approach to how users understand and interact with websites and web applications. Trained
and certified at the UCF Full-Stack Bootcamp learning fundamentals and best practices of JavaScript, CSS, React.js, and responsive web design with interaction with databases such as MySQL and MongoDB.  Agile and intuitive problem-solver with a
passion for building a unique user experience through web applications. 
</p>
            </div>
        </div>
    )
}

export default About