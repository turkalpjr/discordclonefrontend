import React, { useState } from 'react';
import SendMessageButton from '../../resources/images/'

const NewMessage = () => {
    const [message, setMessage] = useState('');

    const handleTextChange = (event) => { 
        setMessage()
    };
    const handleKeyPressed = (event) => { };
    const sendMessage = () => { };

    return (
        <div className='new_message_container'>
            <input className='new_message_input'
                value={message}
                onChange={handleTextChange}
                placeHolder='Type your message...'
                type='text'
                onKeyDown={handleKeyPressed}
            />
            <img className='new_message_button' src={SendMessageButton} onClick={sendMessage} />

        </div>
    );
};

export default NewMessage;