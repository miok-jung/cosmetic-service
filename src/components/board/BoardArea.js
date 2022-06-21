import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from 'components/Header';
import Detail from './Detail';

const BoardArea = () => {
  const [BoardInfo, setBoardInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  let params = useParams();

  useEffect(() => {
    let body = {
      boardNum: params.boardNum,
    };
    axios
      .post('/api/board/detail', body)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.board);
          setBoardInfo(res.data.board);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Header />
      {Flag ? (
        <>
          <Detail BoardInfo={BoardInfo} />
        </>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

export default BoardArea;
