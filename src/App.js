import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IntroductionPage from './IntroductionPage/IntroductionPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';
import RoomPage from './RoomPage/RoomPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/join-room" element={<JoinRoomPage />} />
        <Route exact path="/room" element={<RoomPage />} />
        <Route exact path="/" element={<IntroductionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
