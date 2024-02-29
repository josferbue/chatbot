import React from 'react';
import Session from './Session';
import Loader from './Loader';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const sendMessageToDialogflow = async (message) => {
    disableForm(true);
    const loading = createChatBotMessage(<Loader />)
    setState((prev) => ({ ...prev, messages: [...prev.messages, loading], }))

    let queryParams = new URLSearchParams({ message: message });
    if (Session.id != null) {
      queryParams.append("sessionId", Session.id);
    }
    // Stop Loading after call is returned
    await fetch('https://jafernandez-tfm.ey.r.appspot.com/?' + queryParams)
      .then(response => response.json())
      .then(json => {
        Session.id = json.result.sessionId;
        setState((prev) => {
          // Remove Loading here
          const newPrevMsg = prev.messages.slice(0, -1)
          return { ...prev, messages: [...newPrevMsg, createChatBotMessageByResponse(json.result)], }
        });

      });
    disableForm(false);
  }
  const disableForm = (disable) => {
    var form = document.getElementsByClassName("react-chatbot-kit-chat-input-form")[0];
    var elements = form.elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
      if (disable) {
        elements[i].setAttribute("disabled", "disabled");
      } else {
        elements[i].removeAttribute("disabled");
      }

    }
  }
  const createChatBotMessageByResponse = (response) => {
    let chatBotMessage = null;
    switch (response.type) {
      case "simple":
        chatBotMessage = createChatBotMessage(response.bot);
        break;
      case "models":
        chatBotMessage = createChatBotMessage(
          response.bot,
          {
            payload: { models: response.models },
            widget: 'models',
          }
        );
        break;
      case "avanceSearch":
        let query = response.model.trim().replaceAll(" ", "+");
        query = "https://tintatonersevilla.es/busqueda?q=" + query;
        chatBotMessage = createChatBotMessage(<div>{response.bot}, Sí quieres hacer una búsqueda avanzada pulse <a href={query} target='_blank' rel="noopener noreferrer">aquí</a></div>);
        break;

      default:
        chatBotMessage = createChatBotMessage(response.bot);
        break;
    }

    return chatBotMessage;
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            sendMessageToDialogflow,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;