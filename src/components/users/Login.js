import React from 'react';
import Header from 'components/Header';
import 'css/login.scss';

const Login = () => {
  return (
    <>
      <Header />
      <form className="form_login">
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" />
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" />
        <button>로그인</button>
      </form>
      <button>회원가입</button>
    </>
  );
};

export default Login;
