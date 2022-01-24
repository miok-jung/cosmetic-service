import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import users from 'dummy/user.json';
import 'styles/scss/users/login.scss';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };
  const onLogin = e => {
    console.log('test');
    e.preventDefault();
    // if (email === '' || password === '') {
    //   alert('이메일 혹은 비밀번호를 입력해주세요.');
    //   return false;
    // }
    // props.history('/');
  };
  return (
    <article clstateme="login-wrap">
      <div className="login-inner-wrap">
        <h2>로그인</h2>
        <form className="login-form">
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
          <button type="submit" className="login-btn" onSubmit={onLogin}>
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
