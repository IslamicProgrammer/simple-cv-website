import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav({ isOpentNav, setIsNavOpen }) {
  return (
    <nav className="nav">
      <div className="container">
        <div className="menu-icon" onClick={() => setIsNavOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="logo">
          <h1>
            Murodjon <span>Azamov</span>
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
