import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'img/logo.svg';
import MenuBar from 'img/menuBar.svg';
import 'css/header.scss';

const Header = () => {
  const MenuOpenBtn = (e) => {
    e.preventDefault();

    console.log('CLICK');
  };
  return (
    <header>
      <Link to="/">
        <h1>
          <img src={Logo} alt="Logo" />
          <p>Cosmetics Information</p>
        </h1>
      </Link>
      <nav className="nav">
        <Link to="/board">게시판</Link>
        <Link to="/login">로그인</Link>
      </nav>
      <nav className="mobile_nav">
        <img
          src={MenuBar}
          alt="Menu Bar Icon"
          onClick={(e) => {
            MenuOpenBtn(e);
          }}
        />
        <div className="mobile_nav_wrap hidden">
          <Link to="/board">게시판</Link>
          <Link to="/login">로그인</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
