import React from "react";
import PropTypes from "prop-types";

const brandSpacingStyles = {
  margin: "left 1em"
}

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
        <div className="container" id="brand-spacer"></div>
        <a className="navbar-brand ml-5" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {props.navBarItems}
          </ul>
        </div>
        <div className="container" id="nav-item-spacer"></div>
      </nav>
    )
};

NavBar.propTypes = {
  navBarItems: PropTypes.array
}

export default NavBar;