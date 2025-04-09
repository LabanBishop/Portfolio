import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  jss: {
    backgroundColor: "green",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "deepgreen",
    },
  },
});

function Navbar() {
  const classes = useStyles();  
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff69b4' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyNavbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav ${classes.jss}`}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className={"dropdown-menu ${classes.jss}`"} aria-labelledby="navbarDropdown">
                <li><a className={`btn ${classes.jss}`} href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;