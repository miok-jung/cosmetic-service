import React from 'react';
import 'styles/scss/users/register.scss';

const Register = () => {
  return (
    <article className="register-wrap">
      <div className="register-inner-wrap">
        <h2>회원가입</h2>
        <form className="register-form">
          {/* TODO 회원가입시 필요한 내역을 점진적으로 추가할 것 */}
          <label>이메일</label>
          <input type="email" />
          <label>닉네임</label>
          <input type="text" />
          <label>비밀번호</label>
          <input type="password" />
          <label>비밀번호 확인</label>
          <input type="password" />
          <button type="submit" className="register-btn">
            회원가입
          </button>
        </form>
      </div>
    </article>
  );
};

export default Register;
