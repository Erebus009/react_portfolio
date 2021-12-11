import React, {useState} from 'react';
import Project from '../Project';



function Portfiolo() {
    const [projects] = useState([
        {
          name: 'Employee-Tracker',
          description: 'MySQL, Javascript, Node.js, CRUD',
          link: "https://github.com/Erebus009/employee-tracker",
          repo: "https://github.com/Erebus009/employee-tracker"
        },
        {
          name: 'Employee Generator',
          description: 'Javascript,NPM inquirer, CLI app, Handlebars, Jest',
          link: "https://github.com/Erebus009/Employee-generator",
          repo: "https://github.com/Erebus009/Employee-generator"
        },
        {
          name: 'Weather-Forecast',
          description: 'Javascript/API calls',
          link: "https://erebus009.github.io/weather-forecast-app/",
          repo: "https://github.com/Erebus009/weather-forecast-app"
        },
        {
          name: 'READme Generator',
          description: 'NodeJS, Markdown, Javascript, CLI app',
          link: "https://github.com/Erebus009/README-Generator",
          repo: "https://github.com/Erebus009/README-Generator"
        },
        {
          name: 'PokeAPI',
          description: 'PokeAPI Fetch(), Javascript',
          link: "https://erebus009.github.io/PokeAPI_usage/",
          repo: "https://github.com/Erebus009/PokeAPI_usage"
        },
        {
          name: 'Workout Tracker',
          description: 'NodeJS, Javascript, MongoDB, Express ',
          link: "https://cryptic-coast-75761.herokuapp.com/?id=6190192884763d00168a9ef3",
          repo: "https://github.com/Erebus009/workout_tracker"
        },
        
       
      ]);
      return (
        <div>
          <div className="flex-row container.fluid d-flex justify-content-around">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
    };
    
    export default Portfiolo;