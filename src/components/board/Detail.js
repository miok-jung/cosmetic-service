import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Header from 'components/Header';

const Detail = () => {
  let params = useParams();
  const [boardInfo, setBoardInfo] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    let body = {
      boardNum: params.boardNum,
    };
    axios
      .post('/api/board/detail', body)
      .then((res) => {
        if (res.data.success) {
          setBoardInfo(res.data.board);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <h3>{boardInfo.title}</h3>
      <p>{boardInfo.content}</p>
      <p>날짜 : {boardInfo.date}</p>
      <p>덧글 총 갯수 : {boardInfo.repleNum}</p>
      <p>작성자 : {boardInfo.author}</p>
    </>
  );
};

export default Detail;
