import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'styles/images/logo.svg';
import 'styles/scss/common/navigation.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const [open, setOpen] = useState('false');
  const [close, setClose] = useState('false');
  const onOpen = () => {
    const openWrap = document.getElementsByClassName('nav-wrap');
    setOpen((openWrap[0].style.display = 'flex'));
  };
  const onClose = () => {
    const navWrap = document.getElementsByClassName('nav-wrap');
    setClose((navWrap[0].style.display = 'none'));
  };

  return (
    <nav>
      <h1>
        <Link to="/">
          <img src={logo} alt="Main Logo" title="Logo" />
          <span>JNarin Cosmetic</span>
        </Link>
      </h1>
      {window.innerWidth > 758 ? (
        <ul className="nav-wrap">
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <div className="mobile-wrap">
          <AiOutlineMenu className="mobile-nav" onClick={onOpen} />
          <ul className="nav-wrap">
            <AiOutlineClose className="mobile-close" onClick={onClose} />
            <li className="nav-all">전체메뉴</li>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
