import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project container.fluid mt-5" key={name}>
      <div className="project-img ">
      <img
        src={require(`../../assets/projects/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      </div>
      <div className="project-text">
        <h3>
          <a href={link} rel="noreferrer" target="_blank">{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default Project;