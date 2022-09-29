import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import EyeBackground from './routes/eye-background';
import Product from './routes/product';
import ContactUs from './routes/contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="facility" element={<EyeBackground />} />
      <Route path="product" element={<Product />} />
      <Route path="contact" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
