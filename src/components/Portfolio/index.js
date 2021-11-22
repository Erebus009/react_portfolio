import React, {useState} from 'react';
import Project from '../Project';



function Portfiolo() {
    const [projects] = useState([
        {
          name: 'Employee-Tracker',
          description: 'MySQL, Javascript, Node.js',
          link: "https://github.com/Erebus009/employee-tracker",
          repo: "https://github.com/Erebus009/employee-tracker"
        },
        {
          name: 'Weather-Forecast',
          description: 'Javascript/API calls',
          link: "https://erebus009.github.io/weather-forecast-app/",
          repo: "https://github.com/Erebus009/weather-forecast-app"
        },
        {
          name: 'Employee-Tracker',
          description: 'MERN Stack',
          link: "https://github.com/Erebus009/employee-tracker",
          repo: "https://github.com/Erebus009/employee-tracker"
        },
        // {
        //   name: 'thing',
        //   description: 'MERN Stack',
        //   link: "https://github.com",
        //   repo: "https://github.com"
        // },
        // {
        //   name: 'thing',
        //   description: 'MERN Stack',
        //   link: "https://github.com",
        //   repo: "https://github.com"
        // },
        // {
        //   name: 'thing',
        //   description: 'MERN Stack',
        //   link: "https://github.com",
        //   repo: "https://github.com"
        // },
        // {
        //   name: 'thing',
        //   description: 'MERN Stack',
        //   link: "https://github.com",
        //   repo: "https://github.com"
        // },
       
      ]);
      return (
        <div>
          <div className="flex-row container.fluid d-flex justify-content-between">
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