import React from "react";
import { Featured } from "../component/Featured";
import "../style/products.css";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import items from "../pages/Productlist";

export const Product = () => {
  return (
    <div id="prd-page">
      <div id="menu-prd">
        <h3>Categories</h3>
        <div className="categ">
          <a href="#t-shirt">T-shirt</a>
        </div>
        <div className="categ">
          <a href="#hoodie">Hoodie</a>
        </div>
        <div className="categ">
          <a href="#accessoire">Accessoire</a>
        </div>
      </div>
      <div id="product-cont">
        <div id="t-shirt">
          <h1>T-shirt</h1>
          <Swiper
            modules={[Virtual, Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            virtual
          >
            {items[0].map((item, index) => (
              <SwiperSlide virtualIndex={index} className="swipper">
                <Featured
                  className="swiper-slide"
                  id={item.id}
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
        <div id="hoodie">
          <h1>Hoodies</h1>
          <Swiper
            modules={[Virtual, Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
          >
            {items[1].map((item, index) => (
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
    </div>
  );
};
