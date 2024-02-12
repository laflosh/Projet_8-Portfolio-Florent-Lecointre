import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.scss';
import Home from './_pages/Home/_index';
import ContactForm from './_pages/contactForm/_index';
import Error from './_pages/Error/_index';
import Header from './_components/Header/_index';
import Footer from './_components/Footer/_index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <Router>

      <Header/>

        <Routes>

          <Routes path="/" element={<Home/>}/>
          <Routes path="contactform" element={<ContactForm/>}/>
          <Routes path="*" element={<Error/>}/>

        </Routes>

      <Footer/>

    </Router>

  </React.StrictMode>

);