import React from 'react';
import CheckImg from '../resources/images/check.png'
const OnlyWithAudioCheckbox = (props) => {
    const handleConnectionTypeChange = () => {
        //change info in our store about connection type
    }
    return (
        <div className='checkbox_container'>
            <div className='checkbox_connection' onClick={handleConnectionTypeChange}>
                <img className='checkbox_image' src={CheckImg}></img>
            </div>
            <p className='checkbox_container_paragraph'> Only audio</p>
        </div>
    );
};


export default OnlyWithAudioCheckbox;