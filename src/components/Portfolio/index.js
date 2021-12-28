import React, {useState} from 'react';
import "./style.css"
import Projects from '../Projects';
import pokeapi from "../../assets/projects/PokeAPI.jpg"


function Portfiolo() {
  const [projects] = useState([
    {
      id : 1,
      name: 'Employee-Tracker',
      description: 'MySQL, Javascript, Node.js, CRUD',
      link: "https://github.com/Erebus009/employee-tracker",
      repo: "https://github.com/Erebus009/employee-tracker"
    },
    {
      id: 2,
      name: 'Employee Generator',
      description: 'Javascript,NPM inquirer, CLI app, Handlebars, Jest',
      link: "https://github.com/Erebus009/Employee-generator",
      repo: "https://github.com/Erebus009/Employee-generator"
    },
    {
      id: 3,
      name: 'Weather-Forecast',
      description: 'Javascript/API calls',
      link: "https://erebus009.github.io/weather-forecast-app/",
      repo: "https://github.com/Erebus009/weather-forecast-app"
    },
    {
      id: 4,
      name: 'READme Generator',
      description: 'NodeJS, Markdown, Javascript, CLI app',
      link: "https://github.com/Erebus009/README-Generator",
      repo: "https://github.com/Erebus009/README-Generator"
    },
    {
      id: 5,
      name: 'PokeAPI',
      description: 'PokeAPI Fetch(), Javascript',
      image: pokeapi,
      link: "https://erebus009.github.io/PokeAPI_usage/",
      repo: "https://github.com/Erebus009/PokeAPI_usage"
    },
    {
      id: 6,
      name: 'Workout Tracker',
      description: 'NodeJS, Javascript, MongoDB, Express ',
      link: "https://cryptic-coast-75761.herokuapp.com/?id=6190192884763d00168a9ef3",
      repo: "https://github.com/Erebus009/workout_tracker"
    },
    
   
  ]);
   
      return (
        <div>
          <div className="project-list">
            
             <div>
               <h1 className='project-title'>My Projects</h1>
               <p className='project-text'>A list of all my projects and the languages used.</p>
             </div>
            
          </div>
          <div className='projects'>
            {projects.map((project) =>(    
            
            <Projects key={project.id} name ={project.name} description={project.description}
            link= {project.link} repo = {project.repo} image = {project.image}/>
            
            ))}
          
              
          </div>
          <a href='link'>link</a>
        </div>
      );
    };
    
    export default Portfiolo;