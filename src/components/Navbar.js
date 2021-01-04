import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../github.jpg";

function Navbar({ isNavOpen, setIsNavOpen, contentType, setContentType }) {
  return (
    <div className={`navbar ${isNavOpen ? "open-nav" : ""}`}>
      <i className="fas fa-times x-btn" onClick={() => setIsNavOpen(false)}></i>
      <div className="navbar__title">
        <img src={backgroundImg} className="avatar" />
        <h1>Murodjon Azamov</h1>
      </div>
      <ul className="list">
        <li
          className="list-item"
          onClick={() => {
            setContentType("about");
            setIsNavOpen(false);
          }}
        >
          <Link to="/">About</Link>
        </li>
        <li
          className="list-item"
          onClick={() => {
            setContentType("portfolio");
            setIsNavOpen(false);
          }}
        >
          <Link to="/">Portfolio</Link>
        </li>
      </ul>
      <div className="social">
        <a href="https://github.com/islamicProgrammer" target="_blank">
          <i className="fab fa-github" />
        </a>
        <a href="https://t.me/murodjon_azamov" target="_blank">
          <i className="fab fa-telegram" />
        </a>
        <a href="https://twitter.com/islamicProgram3" target="_blank">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
