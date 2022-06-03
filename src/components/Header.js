import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'img/logo.svg';
import MenuBar from 'img/menuBar.svg';
import CloseBtn from 'img/close.svg';
import 'css/header.scss';

const Header = () => {
  const MenuOpenBtn = (e) => {
    e.preventDefault();
    const menuBtn = document.getElementsByClassName('mobile_nav_wrap');
    menuBtn[0].classList.remove('hidden');
  };
  const CloseMenuBtn = (e) => {
    e.preventDefault();
    const menuBtn = document.getElementsByClassName('mobile_nav_wrap');
    menuBtn[0].classList.add('hidden');
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
          <div className="mobile_nav_inner_wrap">
            <img
              src={CloseBtn}
              alt="Menu Bar Close Button"
              onClick={(e) => {
                CloseMenuBtn(e);
              }}
            />
            <p className="mobile_top_menu">전체 메뉴</p>
            <Link to="/board">게시판</Link>
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
