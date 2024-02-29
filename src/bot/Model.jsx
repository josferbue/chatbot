// new file called DogPicture.jsx
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

const Model = (props) => {
    const handleClick = () => { window.open(props.url, '_blank') }

    return (
        <div key={props.id}>
            <Tooltip id={'tooltip' + props.id} />
            <img src={props.image} className="chat-bot-model" alt={props.name} data-tooltip-id={'tooltip' + props.id} data-tooltip-content={props.name} data-tooltip-place="top" onClick={handleClick} />
            <div class="caption">{props.amount} €</div>
        </div>
    );
};

export default Model;