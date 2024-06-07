import React from "react";
import "../style/header.css";

export const Header = () => {
  return (
    <div id="header-container">
      <a href="home">
        <img src="./images/logo.png" alt="logo" id="logo" />
      </a>
      <ul id="nav-bar">
        <a href="home">
          <li id="active">Home</li>
        </a>
        <a href="product">
          <li>Product</li>
        </a>
        <a href="latest">
          <li>Latest</li>
        </a>
        <a href="contact">
          <li>Contact</li>
        </a>
      </ul>
      <div id="search-bar">
        <input placeholder="searching for..." />
        <a href="searching">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </div>
    </div>
  );
};
