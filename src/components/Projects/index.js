import React from "react";
import "./style.css"



const Projects =({name, description, link, repo,image,id})  => {
    
    return (
        
        <div className="p">
            
            <div className="project-browser">
            <h3 className="project-name">{name}</h3>
            <p className="p-right">{description}</p>
            
            </div>
            <div>   </div>
            <a href={link} rel="noreferrer" target="_blank"><img className="p-img" src={image} alt=""></img></a>
            
        </div>
       
    )
    
}

export default Projects