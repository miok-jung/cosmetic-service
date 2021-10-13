import React from 'react';
import logo from 'styles/images/logo.svg';
import 'styles/scss/common/footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>
        이용약관 | 개인정보처리방침 | ARS 본인인증 | 법적고지 | 이메일무단수집거부 | 사업자정보 확인
      </p>
      <p>대표이사 : 정미옥 | 주소 : 경기도 광주시 중앙로 346번길 | 고객센터 : 1234-5678</p>
      <p>사업자 등록번호 : 123-45-67890 | 통신판매업신고 : 2021-경기도지역-1234</p>
      <p>
        <img src={logo} alt="JNarin logo" title="JNarin" /> JNarin
      </p>
    </footer>
  );
};

export default Footer;
