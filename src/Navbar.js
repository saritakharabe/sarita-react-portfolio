import React from "react";

const styles = {
  navDisplay: {
    display: 'flex',
    margin: '10px 10px'
  }, 
}

export default function Navbar({ currentPage, handlePageChange }) {
    return (
      <div className="header">
        <nav className="navbar justify-content-end">
          <ul className="nav nav-tabs" style={styles.navDisplay}>
            <li className="nav-item">
              <a
                href="#AboutMe"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About 
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        </div>
    );
  };