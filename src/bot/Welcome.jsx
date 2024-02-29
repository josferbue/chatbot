import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
const Welcome = (props) => {

    const continueTo = () => {
        props.actionProvider.sendMessageToDialogflow('Si');
    }
    return (
        <div className='chat-bot-welcome-button'>
            <Button variant="outlined" startIcon={<CheckIcon />} onClick={continueTo}>
                Si
            </Button>
        </div >

    );
};

export default Welcome;