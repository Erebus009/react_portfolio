import React from "react";
import "./style.css"



const Projects =({name, description, link, repo,image,id})  => {
    
    return (
        
        <div className="p">
            <div className="project-browser">
            <h3 className="project-name">{name}</h3>
            </div>
            <img src={image} alt=""></img>
            
        </div>
       
    )
    
}

export default Projects