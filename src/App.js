
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Product } from './pages/Product';
import { Article } from './pages/Article';
import { Productpage } from './pages/Productpage';
import { Contact } from './pages/Contact';
import { Mediaheader } from './pages/Mediaheader';
export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/article' element={<Article />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Mediaheader />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
