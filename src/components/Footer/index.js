import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Erebus009"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/travis-puryear-69036286/"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/"
    }
  ]

  return (
    <footer className=" d-flex justify-content-around">
      <div></div>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
         <div></div>
    </footer>
  );
}

export default Footer;