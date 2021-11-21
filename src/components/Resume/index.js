import React from 'react';

function Resume() {
  return (
    <section className="text-white container d-flex justify-content-center h-25">
      <div className=" resume">
      <p>
        Download my <a href="https://www.linkedin.com/">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL (insomnia)</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
