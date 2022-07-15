import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Header from 'components/Header'
import * as config from '../../config'
import 'css/upload.scss'

const Upload = () => {
  const [Title, setTitle] = useState('')
  const [Content, setContent] = useState('')

  let navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const [File, setFile] = useState()
  const [Images, setImages] = useState()

  // useEffect(() => {
  //   console.log('user', user)
  // }, [])

  const FileUpload = async (e) => {
    let formData = new FormData()
    let file = e.target.files[0]
    setFile(file)
    formData.append('image', e.target.files[0])

    const config = { headers: { 'Content-Type': 'multipart/form-data' } }
    await axios
      .post('/api/board/image/upload', formData, config)
      .then((res) => {
        setImages(res.data.imageURL)
        console.log('r', res.data.imageURL)
      })
      .catch((err) => {
        console.log('ERR', err)
      })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (Title === '' || Content === '') {
      return alert('모든 항목을 채워주세요.')
    }
    let body = {
      title: Title,
      content: Content,
      image: Images,
      uid: user,
    }
    console.log('body', body)
    axios
      .post('/api/board/submit', body)
      .then((res) => {
        if (res.data.success) {
          alert('글 작성이 완료되었습니다. 게시판으로 이동합니다.')
          navigate('/board')
        } else {
          alert('글 작성에 실패하였습니다.')
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
              setTitle(e.currentTarget.value)
            }}
          />
          <label htmlFor="image" className="img_label">
            이미지 업로드
          </label>
          <input id="image" name="image" type="file" accept="image/*" onChange={(e) => FileUpload(e)} />
          {File ? (
            <img className="upload_preview" src={`${config.AWS_BOARD_URL}/${Images}`} alt="uploading..." />
          ) : null}
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            wrap="hard"
            value={Content}
            onChange={(e) => {
              setContent(e.currentTarget.value)
            }}
          />
          <div className="btn_wrap">
            <button
              className="submit"
              onClick={(e) => {
                onSubmit(e)
              }}
            >
              제출
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Upload
