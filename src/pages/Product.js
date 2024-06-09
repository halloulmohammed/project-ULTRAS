import React from "react";
import { Featured } from "../component/Featured";
import "../style/products.css";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export const Product = () => {
  const items = [
    {
      pic: "./images/8.jpg",
      title: "MAS TSHIRT",
      price: "150dh",
      rate: "4.5",
      review: "0",
    },
    {
      pic: "./images/5.jpg",
      title: "HUSA TSHIRT",
      price: "250dh",
      rate: "5",
      review: "2",
    },
    {
      pic: "./images/6.jpg",
      title: "IRT TSHIRT",
      price: "150dh",
      rate: "4.5",
      review: "0",
    },
    {
      pic: "./images/1.jpg",
      title: "RAJA TSHIRT",
      price: "150dh",
      rate: "4.5",
      review: "0",
    },
    {
      pic: "./images/10.jpg",
      title: "WAC TSHIRT",
      price: "150dh",
      rate: "4.5",
      review: "10",
    },
    {
      pic: "./images/11.jpeg",
      title: "WAC TSHIRT",
      price: "150dh",
      rate: "4.5",
      review: "10",
    },
  ];
  const hoodies = [
    {
      pic: "./images/12.jpg",
      title: "MAS Hoodie",
      price: "350dh",
      rate: "5",
      review: "8",
    },
    {
      pic: "./images/14.png",
      title: "HUSA TSHIRT",
      price: "350dh",
      rate: "5",
      review: "2",
    },
    {
      pic: "./images/13.jpg",
      title: "IRT Hoodie",
      price: "350dh",
      rate: "4.0",
      review: "0",
    },
    {
      pic: "./images/7.jpg",
      title: "RAJA Hoodie",
      price: "350dh",
      rate: "4.5",
      review: "0",
    },
    {
      pic: "./images/2.png",
      title: "WAC Hoodie",
      price: "350dh",
      rate: "5",
      review: "10",
    },
  ];

  return (
    <div id="prd-page">
      <div id="menu-prd">
        <h3>Categories</h3>
        <div className="categ">
          <input
            type="radio"
            id="contactChoice1"
            name="product"
            value="t-shirt"
          />
          <label for="contactChoice1">T-shirt</label>
        </div>
        <div className="categ">
          <input
            type="radio"
            id="contactChoice2"
            name="product"
            value="hoodie"
          />
          <label for="contactChoice2">Hoodie</label>
        </div>
        <div className="categ">
          <input
            type="radio"
            id="contactChoice3"
            name="product"
            value="accessoire"
          />
          <label for="contactChoice3">Accessoire</label>
        </div>
      </div >
      <div id="product-cont">
        <h1>T-shirt</h1>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          virtual
        >
          {items.map((item, index) => (
            <SwiperSlide virtualIndex={index} className="swipper">
              <Featured
                className="swiper-slide"
                key={index}
                pic={item.pic}
                title={item.title}
                price={item.price}
                rate={item.rate}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <h1>Hoodies</h1>
        <Swiper
          modules={[Virtual, Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          virtual
        >
          {hoodies.map((item, index) => (
            <SwiperSlide virtualIndex={index} className="swipper">
              <Featured
                className="swiper-slide"
                key={index}
                pic={item.pic}
                title={item.title}
                price={item.price}
                rate={item.rate}
                review={item.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
