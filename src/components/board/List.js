import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Header from 'components/Header'
import * as config from '../../config'
import Heart from 'img/heart.svg'
import 'css/list.scss'

const List = () => {
  const [Flag, setFlag] = useState(false)
  const [Lists, setLists] = useState([])
  const [Count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('/api/board/list')
      .then((res) => {
        setCount(res.data.boardList.length)
      })
      .catch((err) => {
        return err
      })
    axios.get(`/api/board/list/recent`).then((res) => {
      if (res.data.success) {
        if (res.data.boardList.length === 0) {
          setFlag(false)
        } else {
          setFlag(true)
          setLists(res.data.boardList)
        }
      }
    })
  }, [])
  return (
    <>
      <Header />
      {Flag ? (
        <div className="board-list_wrap">
          <h2>게시판</h2>
          <div>
            <p>Total : {Count}</p>
            모든글보기
          </div>

          {/* FIXME 인기글 추가하기 */}
          {/* <section className="board-popular">
            <h3>인기글</h3>
          </section> */}
          <section className="board-recent">
            <h3>최신글</h3>
            <div className="board-recent_wrap">
              {Lists.map((list, index) => {
                return (
                  <div className="board-recent_list" key={index}>
                    <Link to={`/board/${list.boardNum}`}>
                      <h4>{list.title}</h4>
                      {list.image === undefined ? (
                        <span className="preview null">이미지없음</span>
                      ) : (
                        <img class="preview view" src={`${config.AWS_BOARD_URL}/${list.image}`} />
                      )}

                      <p className="like">
                        <img src={Heart} className="svg" />
                        &nbsp;19k
                      </p>
                      <p>{list.content}</p>
                    </Link>
                  </div>
                )
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
  )
}

export default List
