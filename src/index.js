import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AboutMe from './pages/AboutMe';
import App from './App';
import Main from './pages/Main'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from './pages/Navigationbar';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <Navigationbar />
    </div>
    <div>
      <Routes>
        <Route index element={<Main />} />
        <Route path = "/About" element={<AboutMe />} />
        <Route path = "/Contact" element={<Contact />} />
        <Route path = "*" element={<App />} />
      </Routes>
    </div>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
