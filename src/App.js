import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandignPage from './components/LandingPage';
import Login from 'components/users/Login';
import BoardArea from 'components/board/BoardArea';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandignPage />} />
      <Route path="/board" element={<BoardArea />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
