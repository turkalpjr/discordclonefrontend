
import { setShowOverlay } from "../store/actions";
import store from '../store/store';
import * as wss from './wss';
const defaultConstraints = {
    audio: true,
    video: true
}

let localStream;

export const getLocalPreviewAndInitRoomConnection = async (
    isRoomHost,
    identity,
    roomId = null
) => {
    navigator.mediaDevices.getUserMedia(defaultConstraints).then(stream => {
        console.log('successfuly received local stream');
        localStream = stream;
        showLocalVideoPreview(localStream);
        //dispatch an action to hide overlay
        store.dispatch(setShowOverlay(false));
        isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom( identity,roomId);
    }).catch(err => {
        console.log('ERROR OCCURED WHEN TRYING TO GET ACCESS TO LOCAL STREAM');
        console.log(err);
    })
}

const showLocalVideoPreview = (stream) => {
    //show local video preview    
}
