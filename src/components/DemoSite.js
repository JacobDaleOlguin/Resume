import React from 'react';

const DemoSite = ({ title, description, image, technologies, link, theme }) => {
  return (
    <div className={`demo-site ${theme}`}>
      <img src={image} alt={title} className="demo-image" />
      <div className="demo-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a href={link} target="_blank" rel="noreferrer">Visit Site</a>
      </div>
    </div>
  );
};

export default DemoSite;
