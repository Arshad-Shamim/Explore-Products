import { useState } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css'

import Products from './pages/products.jsx';
import Product from './pages/product.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products"/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:name" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
