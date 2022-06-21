import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Header from 'components/Header';
import 'css/detail.scss';
import dayjs from 'dayjs';

const Detail = (props) => {
  const [Day, setDay] = useState();

  useEffect(() => {
    let date = props.BoardInfo.date;
    let week = ['일', '월', '화', '수', '목', '금', '토'];
    setDay(
      dayjs(date).format('YYYY년 MM월 DD일') +
        ' ' +
        week[dayjs(date).format('d')] +
        '요일 ' +
        dayjs(date).format('A hh:mm'),
    );
  });
  return (
    <div className="detail_wrap">
      <h3>{props.BoardInfo.title}</h3>
      <p className="text-right">작성자 : {props.BoardInfo.author.nickname}</p>
      <p className="text-right">{Day}</p>
      <pre>{props.BoardInfo.content}</pre>
      <p>덧글 총 갯수 : {props.BoardInfo.repleNum}</p>
    </div>
  );
};

export default Detail;
