import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Root = () => (
  <div id="details">
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Root;
