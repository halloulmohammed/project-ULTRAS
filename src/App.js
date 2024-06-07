import React from 'react'
import { Header } from './component/Header'
import { Hero } from './component/Hero'
import { Featured } from './component/Featured'
import './App.css'
import { Appsection } from './component/Appsection'
import {Footer} from './component/Footer'
export const App = () => {
  const items=[{
    pic:"./images/1.jpg",
    title:"TSHIRT RAJA",
    price:"150dh",
    rate:'4.5',
    review:'0'
  }, {
    pic:"./images/2.png",
    title:"HOODIE WAC",
    price:"250dh",
    rate:'4.5',
    review:'1'
  },
  {
    pic:"./images/3.png",
    title:"HOODIE WAC",
    price:"250dh",
    rate:'4.5',
    review:'1'
  },{
    pic:"./images/4.jpg",
    title:"CAGOULE",
    price:"70dh",
    rate:'4',
    review:'3'
  },
  ];
  const latestItems=[{
    pic:"./images/5.jpg",
    title:"HUSA TSHIRT",
    price:"250dh",
    rate:'5',
    review:'2'
  },{
    pic:"./images/6.jpg",
    title:"IRT TSHIRT",
    price:"150dh",
    rate:'4.5',
    review:'0'
  },{
    pic:"./images/1.jpg",
    title:"TSHIRT RAJA",
    price:"150dh",
    rate:'4.5',
    review:'0'
  }, {
    pic:"./images/2.png",
    title:"HOODIE WAC",
    price:"250dh",
    rate:'4.5',
    review:'1'
  },
  {
    pic:"./images/3.png",
    title:"HOODIE WAC",
    price:"250dh",
    rate:'4.5',
    review:'1'
  },{
    pic:"./images/4.jpg",
    title:"CAGOULE",
    price:"70dh",
    rate:'4',
    review:'3'
  },
  ];
  return (
    <div>
      <Header />
      <Hero />
      <div id="featured-container">
        <h1>FEATURED</h1>
        <p>Discover our new brand collections</p>
        <div id='product-containner'>
          {items.map((item, i) => (
            <Featured
              key={i}
              pic={item.pic}
              title={item.title}
              price={item.price}
              rate={item.rate}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <Appsection />
      <div id="latest-container">
        <h1>LATEST ITEMS</h1>
        <div id='latest-container'>
          {latestItems.map((item, i) => (
            <Featured
              key={i}
              pic={item.pic}
              title={item.title}
              price={item.price}
              rate={item.rate}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
