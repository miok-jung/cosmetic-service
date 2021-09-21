import React, { useEffect, useRef, useState } from 'react';
import img1 from 'styles/images/main/slide1.jpg';
import img2 from 'styles/images/main/slide2.jpg';
import img3 from 'styles/images/main/slide3.jpg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import 'styles/autoslide.scss';

// TODO 기능 LIST
// 1. 자동 슬라이드
// 2. 버튼 클릭시 슬라이드(완료)
// 3. 클릭시 해당 상세페이지 이동
// 4. mouseOver시 자동슬라이드 일시 멈춤 mouseout할 경우 다시 자동 슬라이드 추가()
// 5. 하단 버튼 개수 보여주기(완료)
const AutoSlide = () => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef(null);

  const images = [
    {
      title: '슬라이드 첫번째 이미지입니다.',
      image: img1,
      alt: '슬라이드 첫번째',
      content: 'this is some test content'
    },
    {
      title: '슬라이드 두번째 이미지입니다.',
      image: img2,
      alt: '슬라이드 두번째',
      content: 'this is some test content'
    },
    {
      title: '슬라이드 세번째 이미지입니다.',
      image: img3,
      alt: '슬라이드 세번째',
      content: 'this is some test content'
    }
  ];
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${slide}00vw)`;
  }, [slide]);

  const nextSlide = () => {
    if (slide >= images.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  const prevSlide = () => {
    if (slide === 0) {
      setSlide(images.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  const btnClick = e => {
    if (slide !== parseInt(e.target.innerText)) {
      setSlide(parseInt(e.target.name));
    } else {
      return false;
    }
  };

  return (
    <header>
      <ul className="slide-wrap" ref={slideRef}>
        {images.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.alt} title={item.title} />
            <div className="list-info">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <a href="/">더보기</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="side-arrow-wrap">
        <MdKeyboardArrowLeft onClick={prevSlide} />
        <MdKeyboardArrowRight onClick={nextSlide} />
      </div>
      <div className="slide-length">
        {images.map((item, index) =>
          slide === index ? (
            <button key={index} className="slideBtn" onClick={btnClick}>
              {index}
            </button>
          ) : (
            <button key={index} name={index} onClick={btnClick}>
              {index}
            </button>
          )
        )}
      </div>
    </header>
  );
};

export default AutoSlide;
