import { useState } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import './App.css'

import Products from './pages/products.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/products"/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
