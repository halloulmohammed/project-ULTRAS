import React from "react";
import { Link } from "react-router-dom";
import "../style/mediaheader.css";
export const Mediaheader = () => {
  return (
    <div id="media-header">
      <div id="headerbg">
        <ul>
          <li>
            <Link to="/article">Tifo</Link>
          </li>
          <li>
            <Link to="/article">Songs</Link>
          </li>
          <li>
            <Link to="/article">Vedios</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
