import React, {useState} from 'react';

function Portfiolo() {
    const [projects] = useState([
        {
          name: 'surf-report',
          description: 'MERN Stack',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'pastel-puzzels',
          description: 'MERN Stack',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'run-buddy',
          description: 'HTML/CSS',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'led-wall',
          description: 'Node/IoT',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'calculator',
          description: 'React/JavaScript/CSS',
          link: "https://github.com",
          repo: "https://github.com"
        },
      ]);
      return (
          <div className="text-white">hey</div>
      )
}

export default Portfiolo