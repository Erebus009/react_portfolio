import React, {useState} from 'react';
import "./style.css"
import Projects from '../Projects';
import pokeapi from "../../assets/projects/PokeAPI.jpg"
import generator from "../../assets/projects/Employee Generator.jpg"
import weather from "../../assets/projects/Weather-Forecast.jpg"
import tracker from "../../assets/projects/Employee-Tracker.jpg"
import ReadMe from "../../assets/projects/READme Generator.jpg"
import workout from "../../assets/projects/Workout Tracker.jpg"
function Portfiolo() {
  const [projects] = useState([
    {
      id : 1,
      name: 'Employee-Tracker',
      image: tracker,
      description: 'MySQL, JavaScript, Node.js, CRUD',
      link: "https://github.com/Erebus009/employee-tracker",
      repo: "https://github.com/Erebus009/employee-tracker"
    },
    {
      id: 2,
      name: 'Employee Generator',
      description: 'JavaScript,npm inquirer, CLI app, Handlebars, Jest',
      image: generator,
      link: "https://github.com/Erebus009/Employee-generator",
      repo: "https://github.com/Erebus009/Employee-generator"
    },
    {
      id: 3,
      name: 'Weather-Forecast',
      description: 'JavaScript/API calls',
      image: weather,
      link: "https://erebus009.github.io/weather-forecast-app/",
      repo: "https://github.com/Erebus009/weather-forecast-app"
    },
    {
      id: 4,
      name: 'READme Generator',
      image: ReadMe,
      description: 'NodeJS, Markdown, JavaScript, CLI app',
      link: "https://github.com/Erebus009/README-Generator",
      repo: "https://github.com/Erebus009/README-Generator"
    },
    {
      id: 5,
      name: 'PoKeDex with React',
      description: 'PokeAPI, React, JavaScript',
      image: pokeapi,
      link: "https://erebus009.github.io/PokeDex-with-React/",
      repo: "https://github.com/Erebus009/PokeAPI_usage"
    },
    {
      id: 6,
      name: 'Workout Tracker',
      image: workout,
      description: 'NodeJS, JavaScript, MongoDB, Express ',
      link: "https://cryptic-coast-75761.herokuapp.com/?id=6190192884763d00168a9ef3",
      repo: "https://github.com/Erebus009/workout_tracker"
    },
    
   
  ]);
   
      return (
        <div>
          <div className="project-list">
            
             <div>
               <h1 className='project-title'>My Projects</h1>
               <p className='project-text'></p>
             </div>
            
          </div>
          <div className='projects'>
            {projects.map((project) =>(    
            
            <Projects key={project.id} name ={project.name} description={project.description}
            link= {project.link} repo = {project.repo} image = {project.image}/>
            
            ))}
          
              
          </div>
          
        </div>
      );
    };
    
    export default Portfiolo;