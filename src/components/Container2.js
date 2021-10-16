import React from 'react';
import board from 'dummy/board.json';
import 'styles/scss/main/container2.scss';
const Board = () => {
  return (
    <article className="container2">
      <h2>Hot Board</h2>
      <ul></ul>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          {board.board.map(item => (
            <tr key={item.id}>
              <td>{item.id + 1}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
              <td>{item.writeDate}</td>
              <td>{item.viewCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default Board;
