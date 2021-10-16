import React from 'react';
import logo from 'styles/images/logo.svg';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import 'styles/scss/common/footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>이용약관</p>
      <p>주소 : 경기도 광주시 중앙로 346번길</p>
      <p>사업자 등록번호 : 123-45-67890</p>
      <p>
        <a
          href="https://www.instagram.com/j_narin93/"
          alt="인스타그램 바로가기"
          title="인스타그램 새 탭에서 바로보기"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/jung.miok1102"
          alt="페이스북 바로가기"
          title="페이스북 새 탭에서 바로보기"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </p>
      <p>
        <img src={logo} alt="JNarin logo" title="JNarin" /> JNarin
      </p>
    </footer>
  );
};

export default Footer;
