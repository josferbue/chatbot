import './App.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './bot/config.js';
import MessageParser from './bot/Messageparser.jsx';
import ActionProvider from './bot/ActionProvider.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRobot, faWindowMinimize, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import ReactLogo from './icon.svg';
import { ReactSVG } from "react-svg";
class App extends React.Component {
  constructor(props) {
    library.add(faRobot);
    library.add(faWindowMinimize);
    library.add(faWindowMaximize);
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="App">
        <div style={{ display: this.state.isToggleOn ? 'block' : 'none' }}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText='Escribe tu mensaje aquí'
            headerText={<><FontAwesomeIcon icon="fa-solid fa-robot" /> Asistoner &nbsp;<FontAwesomeIcon icon="fa-solid fa-window-minimize" onClick={this.handleClick} /></>}
          />
        </div>
        <div style={{ display: this.state.isToggleOn ? 'none' : 'block' }} className="icon-chat">
          <ReactSVG src={ReactLogo} alt="ChatBot" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
export default App;
