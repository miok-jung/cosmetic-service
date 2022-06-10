import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Logo from 'img/logo.svg';
import MenuBar from 'img/menuBar.svg';
import CloseBtn from 'img/close.svg';
import 'css/header.scss';
import axios from 'axios';

const Header = () => {
  let navigate = useNavigate();

  const [Token, setToken, removeToken] = useCookies('x_auth');

  const MenuOpenBtn = (e) => {
    e.preventDefault();
    const menuBtn = document.getElementsByClassName('nav-mobile_wrap');
    menuBtn[0].classList.remove('hidden');
  };
  const CloseMenuBtn = (e) => {
    e.preventDefault();
    const menuBtn = document.getElementsByClassName('nav-mobile_wrap');
    menuBtn[0].classList.add('hidden');
  };

  const onClickLogout = () => {
    axios.get('api/users/logout').then((res) => {
      if (res.data.success) {
        removeToken('x_auth');
        navigate('/login');
      } else {
        alert('로그아웃에 실패하였습니다.');
      }
    });
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
        {!Token.x_auth ? (
          <Link to="/login">로그인</Link>
        ) : (
          <button className="btn-logout" onClick={() => onClickLogout()}>
            로그아웃
          </button>
        )}
      </nav>
      <nav className="mobile_nav">
        <img
          src={MenuBar}
          alt="Menu Bar Icon"
          onClick={(e) => {
            MenuOpenBtn(e);
          }}
        />
        <div className="nav-mobile_wrap hidden">
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
            {!Token.x_auth ? (
              <Link to="/login">로그인</Link>
            ) : (
              <button className="btn-logout" onClick={() => onClickLogout()}>
                로그아웃
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
