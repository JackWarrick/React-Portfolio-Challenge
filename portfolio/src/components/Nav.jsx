import React from 'react'

export const Nav = ({page, setPage}) => {
    return <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="col">
        <a className="navbar-brand" href="#" onClick={() => setPage("about")}>Jack Warrick</a>
  
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#" onClick={() => setPage("about")}>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setPage("portfolio")}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setPage("contact")}>Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => setPage("resume")}>Resume</a>
      </li>
    </ul>
        </div>
    </div>
        </nav>
}
