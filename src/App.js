import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandignPage from './components/LandingPage';
import BoardArea from 'components/board/BoardArea';
import Register from 'components/users/Register';
import Login from 'components/users/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandignPage />} />
      <Route path="/board" element={<BoardArea />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
