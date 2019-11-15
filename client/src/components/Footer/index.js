import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="mb-0 shadow-lg p-3 bg-black rounded">
        <a> Jegors Jeskovs </a>
        <span> & </span>
        <a> Tetiana Cary </a>
        <span> | </span>
        <a className="sources" href="https://github.com/tcary/bugTracker">
          GitHub Repo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
