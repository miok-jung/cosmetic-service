import React, { useState } from 'react';
import Header from 'components/Header';
import 'css/upload.scss';
import S3Upload from './S3Upload';

const Upload = () => {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  return (
    <>
      <Header />
      <div className="board-wrap">
        <h2 className="board_title">게시판 업로드</h2>
        <form>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={Title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
          <S3Upload />
          <p>이미지 업로드 라인 예정</p>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={Content}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          />
          <div className="btn_wrap">
            <button className="submit">제출</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
