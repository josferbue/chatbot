import React from 'react';
import avatarImage from './avatar.png';

class Avatar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div >
        <img className="bot-avatar" src={avatarImage} alt="Tintatoner" />
      </div>
    );
  }
}
export default Avatar;
