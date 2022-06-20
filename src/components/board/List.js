import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from 'components/Header';
import Heart from 'img/heart.svg';
import 'css/list.scss';

const List = () => {
  const [Flag, setFlag] = useState(false);
  const [Lists, setLists] = useState([]);

  useEffect(() => {
    axios.get(`/api/board/list/recent`).then((res) => {
      if (res.data.success) {
        if (res.data.boardList.length === 0) {
          setFlag(false);
        } else {
          setFlag(true);
          setLists(res.data.boardList);
        }
      }
    });
  }, []);
  return (
    <>
      <Header />
      {Flag ? (
        <div className="board-list_wrap">
          <h2>게시판</h2>
          <p>Total : {Lists.length}</p>
          <section className="board-popular">
            <h3>인기글</h3>
          </section>
          <section className="board-recent">
            <h3>최신글</h3>
            <div className="board-recent_wrap">
              {Lists.map((list, index) => {
                return (
                  <div className="board-recent_list" key={index}>
                    <Link to={`/board/${list.boardNum}`}>
                      <h4>{list.title}</h4>
                      <section className="like">
                        <img src={Heart} className="svg" />
                        <spen>19k</spen>
                      </section>
                      <p>{list.content}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="btn-wrap">
            <Link className="board-btn" to={'/upload'}>
              업로드하기
            </Link>
          </div>
        </div>
      ) : (
        <div className="board-list_wrap">
          <h2>게시판</h2>
          <section className="board-none">게시판에 글이 없습니다.</section>
          <div className="btn-wrap">
            <Link className="board-btn" to={'/upload'}>
              업로드하기
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
