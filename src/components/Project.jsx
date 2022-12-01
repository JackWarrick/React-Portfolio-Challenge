import React from 'react';

export const Project = ({ url, title, github, description }) => {
    return <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
      <a href={url} className="card-link">Deployed App</a>
      <a href={github} className="card-link">GitHub repository</a>
    </div>
  </div>

}