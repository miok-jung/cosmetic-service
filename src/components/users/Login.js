import React from 'react';
import 'styles/scss/users/login.scss';

const Login = () => {
  return (
    <article className="login-wrap">
      <h2>Login</h2>
      <div className="login-form-wrap">
        <form className="login-form">
          <label>Login</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button>Login</button>
        </form>
        <div>Did you forget your information?</div>
      </div>
    </article>
  );
};

export default Login;
