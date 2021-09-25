import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* HTML5의 History API를 사용하여 페이지를 새로고침하지 않도록 주소를 변경할 수 있도록 해준다.
    즉, 페이지 변경으로 인한 깜빡거림이 없다.
    또한, 현재 주소에 관련된 정보를 props로 조회 및 사용이 가능하도록 만들어준다. */}
    {/* <BrowserRouter basename="/cosmetic-service"> */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* gh-pages 추가시 Local의 baseUrl이 변경이 됨
      http://localhost:3000/ 에서 http://localhost:3000/cosmetic-service 로 변경되어
      접속시 에러가 났는데 해결방안은 basename을 넣는 것.
      basename : 모든 위치의 기본 URL. */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
