import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Live classes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Video Library
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Course
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Book
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="/">
              Board
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              exam
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
