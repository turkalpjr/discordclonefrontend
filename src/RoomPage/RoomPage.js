import React from 'react';
import ParticipantsSection from './ParticipantsSection/ParticipantsSection';
import VideoSection from './VideoSection/VideoSection';
import ChatSection from './ChatSection/ChatSection';
import RoomLabel from './RoomLabel';

import './RoomPage.css';
const RoomPage = () => {
    return (
        <div className='room_container'>
            <ParticipantsSection />
            <VideoSection />
            <ChatSection />
            <RoomLabel roomId='1234' />
        </div>
    );
};
export default RoomPage;