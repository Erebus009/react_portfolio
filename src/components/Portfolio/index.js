import React, {useState} from 'react';
import Project from '../Project';

function Portfiolo() {
    const [projects] = useState([
        {
          name: 'thing',
          description: 'MERN Stack',
          link: "https://github.com",
          repo: "https://github.com"
        },
       
      ]);
      return (
        <div>
          <div className="flex-row">
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