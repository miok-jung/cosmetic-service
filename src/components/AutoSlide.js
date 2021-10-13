import React, { useEffect, useRef, useState } from 'react';
import img1 from 'styles/images/main/slide1.jpg';
import img2 from 'styles/images/main/slide2.jpg';
import img3 from 'styles/images/main/slide3.jpg';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'styles/scss/main/autoslide.scss';

const AutoSlide = () => {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef(null);
  const timeoutRef = useRef(null);
  const delay = 2500;

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
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setSlide(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [slide, images.length]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

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
  // LINK AutoSlide : https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/
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
