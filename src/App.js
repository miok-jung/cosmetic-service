import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import Register from 'components/users/Register';
import Login from 'components/users/Login';
import List from 'components/board/List';
import Upload from 'components/board/Upload';
import Detail from 'components/board/Detail';
import Auth from 'hoc/auth';

const App = () => {
  // NOTE Auth(ComponentName, null) : 누구나 접근 가능
  // Auth(ComponentName, true) : 로그인한 유저만 출입가능
  // Auth(ComponentName, false) : 로그인한 유저는 출입불가
  // Auth(ComponentName, true, true) : 로그인한 isAdmin이 true인 사람만 출입가능
  // 즉 어드민 유저만 입장을 원할땐, true, true값을 넣는다.
  return (
    <Routes>
      <Route path="/" exact element={Auth(LandingPage, null)} />
      <Route path="/register" element={Auth(Register, false)} />
      <Route path="/login" element={Auth(Login, false)} />
      <Route path="/board" element={Auth(List, null)} />
      <Route path="/board/:boardNum" element={Auth(Detail, null)} />
      <Route path="/upload" element={Auth(Upload, true)} />
    </Routes>
  );
};

export default App;
