import React from 'react';
import Model from './Model'
import './Models.css';
const Models = (props) => {
    return (
        <div className="chat-bot-models">
            {props.payload.models.map((model) => {
                return <Model id={model.Id} url={model.URL} image={model.URL_Imagen} name={model.Nombre} amount={model.precio} />;
            })}
        </div>
    );
};

export default Models;