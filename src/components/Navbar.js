import React from "react";
import propTypes from "prop-types";


export default function Navbar(props) {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h1>{props.title}</h1>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            onChange={props.toggleDarkMode} 
            checked={props.darkMode}
          />
          <label className="form-check-label">{props.darkMode ? 'Disable' : 'Enable'} Dark Mode</label>
        </div>
          </div>
        </div>
    </header>
  );
}
Navbar.propTypes={
    title:propTypes.string.isRequired,
}
Navbar.defaultProps={
    title:"set logo"
}
