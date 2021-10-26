import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/scss/users/login.scss';

const Login = () => {
  return (
    <article className="login-wrap">
      <div className="login-inner-wrap">
        <h2>로그인</h2>
        <form className="login-form">
          <input type="email" placeholder="example@example.com" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login-find-wrap">
          <span>Find Password</span>
          <span className="hidden">&nbsp;|&nbsp;</span>
          <span>Find email</span>
          <span className="hidden">&nbsp;|&nbsp;</span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </article>
  );
};

export default Login;
