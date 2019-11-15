import React from 'react';
import './index.css';

const purple = require('./images/purpleDot.png');
const blue = require('./images/blueDot.png');
const red = require('./images/redDot.png');
const yellow = require('./images/yellowDot.png');
const green = require('./images/greenDot.png');
const random = require('./images/randomDot.png');

class Dot extends React.Component {
  render() {
    const dotImagePath = GetDotImagePath(this.props.dotTypeString);
    return <img src={dotImagePath} alt='' width='20' height='20' />;
  }
}

function GetDotImagePath(dotTypeString) {
  switch (dotTypeString) {
    case 'n:0':
      return purple;
    case 'n:1':
      return blue;
    case 'n:2':
      return red;
    case 'n:3':
      return green;
    case 'n:4':
      return yellow;
    case 'n:x':
      return random;
    default:
      return random;
  }
}

export default Dot;
