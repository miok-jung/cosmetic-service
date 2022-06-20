import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from 'components/Header';
// import ImgUpload from './ImgUpload';
import 'css/upload.scss';
import { useSelector } from 'react-redux';

const Upload = () => {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [Img, setImg] = useState('');

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const onSubmit = (e) => {
    e.preventDefault();
    if (Title === '' || Content === '') {
      return alert('모든 항목을 채워주세요.');
    }
    let body = {
      title: Title,
      content: Content,
      image: Img,
      uid: user.uid,
    };
    axios
      .post('/api/board/submit', body)
      .then((res) => {
        if (res.data.success) {
          alert('글 작성이 완료되었습니다. 게시판으로 이동합니다.');
          navigate('/board');
        } else {
          alert('글 작성에 실패하였습니다.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="board-wrap">
        <h2 className="board_title">게시판 업로드</h2>
        <form action="/api/board/submit" method="POST" encType="multipart/form-data">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={Title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
          {/* <ImgUpload setImg={setImg} /> */}
          {/* <label htmlFor="image">Image</label> */}
          {/* <input id="image" name="image" type="file" accept="image/*" onChange={(e) => FileUpload(e)} /> */}
          <p>이미지 업로드 구현 예정</p>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            wrap="hard"
            value={Content}
            onChange={(e) => {
              setContent(e.currentTarget.value);
            }}
          />
          <div className="btn_wrap">
            <button
              className="submit"
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              제출
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
