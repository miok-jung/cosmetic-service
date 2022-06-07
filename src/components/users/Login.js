import React, { useState } from 'react';
import { Link, NavigationType, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from 'components/Header';
import { loginUser } from '_actions/user_action';
import 'css/login.scss';

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');

  const loginFunc = (e) => {
    e.preventDefault();
    // FIXME 인풋 포커싱 알아보기
    if (Email === '') {
      return alert('이메일을 입력해주세요.');
    } else if (PW === '') {
      return alert('비밀번호를 입력해주세요.');
    }
    let body = {
      email: Email,
      password: PW,
    };
    // FIXME 로그인 실패 원인이 무엇인지 알려줄 것(이메일/비밀번호 실패를 확실히 가져오기)
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        alert(`${res.payload.nickname}님 환영합니다.`);
        navigate('/');
      } else {
        alert('이메일 혹은 비밀번호 오류입니다. 다시 입력해주세요.');
      }
    });
  };
  return (
    <>
      <Header />
      <form className="form_login">
        <h2>로그인</h2>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" value={Email} onChange={(e) => setEmail(e.currentTarget.value)} />
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" value={PW} onChange={(e) => setPW(e.currentTarget.value)} />
        <button onClick={(e) => loginFunc(e)}>로그인</button>
        <p>로그인이 되지 않나요?</p>
        <Link className="btn_register" to="/register">
          회원가입
        </Link>
      </form>
    </>
  );
};

export default Login;
