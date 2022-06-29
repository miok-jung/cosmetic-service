import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import * as config from '../../config'
import 'css/detail.scss'

const Detail = (props) => {
  const [Day, setDay] = useState()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    let date = props.BoardInfo.date
    let week = ['일', '월', '화', '수', '목', '금', '토']
    setDay(
      dayjs(date).format('YYYY년 MM월 DD일') +
        ' ' +
        week[dayjs(date).format('d')] +
        '요일 ' +
        dayjs(date).format('A hh:mm'),
    )
  })
  return (
    <div className="detail_wrap">
      <h3>{props.BoardInfo.title}</h3>
      <p className="text-right">작성자 : {props.BoardInfo.author.nickname}</p>
      <p className="text-right">{Day}</p>
      <img className="image_wrap" src={`${config.AWS_BOARD_URL}/${props.BoardInfo.image}`} />
      <pre>{props.BoardInfo.content}</pre>
      <p>덧글 총 갯수 : {props.BoardInfo.repleNum}</p>
      <div className="btn-wrap">
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </div>
  )
}

export default Detail
