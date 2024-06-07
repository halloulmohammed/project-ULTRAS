import React from "react";
import "../style/featured.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Featured = (props) => {
  AOS.init();
  return (
    <div data-aos="fade-up" id="collc-con">
      <div className="collection">
        <img src={props.pic} alt="pic" />
        <h3 className="title">{props.title}</h3>
        <h2>{props.price}</h2>
        <h4>
          {props.rate}
          <i className="fa-solid fa-star star"></i>({props.review})
        </h4>
        <button>Add To Card</button>
      </div>
    </div>
  );
};
