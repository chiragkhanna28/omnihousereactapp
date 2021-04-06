import React from 'react';
import HomeButton from './HomeButton.js';
import Help from './Help.js';
import ArrowDown from './ArrowDown.js';
import ArrowUp from './ArrowUp.js';
import Lock from './Lock.js';

const Icon = props => {
  switch(props.name) {
    case "homebutton":
      return <HomeButton {...props} />;
    case "help":
      return <Help {...props} />;
    case "arrowdown":
      return <ArrowDown {...props} />;
    case "arrowup":
      return <ArrowUp {...props} />;
    case "lock":
        return <Lock {...props} />;
    default:
      return <div />;
  }
}

export default Icon;