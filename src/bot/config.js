import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar.js';
import Models from './Models';
import Welcome from './Welcome';
import React from 'react';
const config = {
  initialMessages: [
    createChatBotMessage(
      'Hola, soy Asistoner, tu asistente virtual y puedo ayudarte a encontrar el producto que buscas ¿Necesitas ayuda?',
      { widget: "welcome" })
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />
  },
  widgets: [
    {
      widgetName: 'models',
      widgetFunc: (props) => <Models {...props} />,
    },
    {
      widgetName: 'welcome',
      widgetFunc: (props) => <Welcome {...props} />,
    }
  ],
};

export default config;