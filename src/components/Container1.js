import React from 'react';
import img1 from 'styles/images/main/slide1.jpg';
import img2 from 'styles/images/main/slide2.jpg';
import img3 from 'styles/images/main/slide3.jpg';
import { FcLike } from 'react-icons/fc';
import 'styles/scss/main/container1.scss';

const Container1 = () => {
  const dummy = [
    {
      image: img1,
      alt: '이미지에 대한 첫번째 설명이다.',
      link: '/cosmetic-service/1',
      title: '첫번째 인기 제목',
      count: 159,
      content: '1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      image: img2,
      alt: '이미지에 대한 두번째 설명이다.',
      link: '/cosmetic-service/2',
      title: '두번째 인기 제목',
      count: 10293,
      content: '2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      image: img3,
      alt: '이미지에 대한 세번째 설명이다.',
      link: '/cosmetic-service/3',
      title: '세번째 인기 제목',
      count: 101929395,
      content: '3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      image: img1,
      alt: '이미지에 대한 네번째 설명이다.',
      link: '/cosmetic-service/4',
      title: '네번째 인기 제목',
      count: 5,
      content: '4. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];
  return (
    <article className="container1">
      <h2>Hot Issue</h2>
      <ul className="hot-issue-wrap">
        {dummy.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.alt} title={item.title} />
            </a>
            <div className="image-content">
              <h3>{item.title}</h3>
              <p className="like-count">
                <FcLike />
                {item.count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <p className="hot-issue-content">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Container1;
