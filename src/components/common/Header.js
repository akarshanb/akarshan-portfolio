import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = () => {
  // const class1 = "page-link";
  // if (window.location.pathname === '/') {
  //   return null
  // }
  // else {
  return (
    <nav className="flex-desk-fixed">
      <div className="header-author-name">
        <span>
          AKARSHAN BANSAL
            </span>
      </div>
      <div className="header-links">
        <NavLink to="/about" activeClassName="active">
          <span>
            ABOUT
              </span>
        </NavLink>
        <NavLink to="/technologies" activeClassName="active">
          <span>
            TECHNOLOGIES
              </span>
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <span>
            PROJECTS
              </span>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <span>
            CONTACT
              </span>
        </NavLink>
      </div>
    </nav>
  );
  // }

};

export default Header;
