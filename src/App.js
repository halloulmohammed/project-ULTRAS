// import React from 'react'
// import { BrowserRouter , Routes , Route } from "react-router-dom";
// import { Home } from "../src/pages/Home";
// import { Header } from "../src/component/Header";
// import { Footer } from "../src/component/Footer";
// import { Product } from './pages/Product';
// import { Latest } from './pages/Latest';
// export const App = () => {
//   return (
//     <div>
      
//       <Header />
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/product' element={<Product/>}/>
//           <Route path='/latest' element={<Latest/>}/>
//         </Routes>
//       </BrowserRouter>
//       <Footer />
        
      
      
//     </div>
//   )
// }
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Product } from './pages/Product';
import { Latest } from './pages/Latest';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/latest' element={<Latest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
