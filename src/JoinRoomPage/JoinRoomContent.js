import React, { useState } from 'react';
import JoinRoomInputs from './JoinRoomInputs';
import { connect } from 'react-redux';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import { setConnectOnlyWithAudio } from '../store/actions';
import ErrorMessage from './ErrorMessage';
import JoinRoomButtons from './JoinRoomButtons';
import { useNavigate } from 'react-router-dom';
import {getRoomExists} from '../utils/api';

const JoinRoomContent = (props) => {
    const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } = props;
    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleJoinRoom = async () => {
        if (isRoomHost) {
            createRoom();
        } else {
           await joinRoom();
        }
    };

    const joinRoom = async () => {
        const responseMessage = await getRoomExists(roomIdValue);
        const { roomExists, full } = responseMessage;
        if (roomExists) {
            if (full) {
                setErrorMessage('Meeting is full. Please try again later.')
            } else {
                //join a room!
                //save in our redux store meeting id which was provider by the user who would like to join
                navigate('/room')
            }
        } else {
            setErrorMessage('Meeting not found. Check your meeting id');
        }
    };

    const createRoom = () => {
        navigate('/room');
    }

    return (
        <>
            <JoinRoomInputs roomIdValue={roomIdValue} setRoomIdValue={setRoomIdValue} nameValue={nameValue} setNameValue={setNameValue} isRoomHost={isRoomHost}
            />
            <OnlyWithAudioCheckbox setConnectOnlyWithAudio={setConnectOnlyWithAudio} connectOnlyWithAudio={connectOnlyWithAudio} />
            <ErrorMessage errorMessage={errorMessage} />
            <JoinRoomButtons handleJoinRoom={handleJoinRoom} isRoomHost={isRoomHost} />
        </>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        ...state,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        setConnectOnlyWithAudio: (onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio))
    }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomContent);