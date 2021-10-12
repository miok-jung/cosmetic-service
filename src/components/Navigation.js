import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'styles/images/logo.svg';
import 'styles/scss/navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <h1>
        <Link to="/">
          <img src={logo} alt="Main Logo" title="Logo" />
          <span>JNarin Cosmetic</span>
        </Link>
      </h1>
      <ul>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
        <li>menu1</li>
      </ul>
    </nav>
  );
};

export default Navigation;
