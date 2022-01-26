import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import 'styles/scss/users/login.scss';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };
  const onLogin = e => {
    e.preventDefault();
    axios
      .post(
        '/login',
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        if (res.data.success === true) {
          alert(res.data.msg);
          history.push('/');
        } else {
          alert(res.data.msg);
        }
      });
  };

  return (
    <article clstateme="login-wrap">
      <div className="login-inner-wrap">
        <h2>로그인</h2>
        <form className="login-form" onSubmit={onLogin}>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={onEmailHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordHandler}
          />
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
