import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import profile from '../assets/images/profil.png';

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo">
        Movie App
      </div>
    </Link>
    <div className="user_image">
      <img src={profile} alt="user" />
    </div>
  </div>
);

export default Header;
