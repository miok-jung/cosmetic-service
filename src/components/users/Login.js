import React from 'react';
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
        {/* <div className="login-find-wrap">
          <span>Find Password</span> | <span>Find email</span> | <span>Register</span>
        </div> */}
      </div>
    </article>
  );
};

export default Login;
