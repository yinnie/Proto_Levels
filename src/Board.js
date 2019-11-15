import React from 'react';
import './index.css';
import Dot from './dot.js';

class Board extends React.Component {
  renderDots(levelData) {
    const dotsOneD = levelData.dots;
    const numberDotsPerRow = levelData.width;
    const dotsTwoD = GetDotsInTwoDimensionalArray(dotsOneD, numberDotsPerRow);

    return <table>{dotsTwoD.map((row, index) => this.renderRow(row))}</table>;
  }

  renderRow(rowData) {
    return (
      <tr>
        {rowData.map(dot => (
          <td>{this.renderSingleDot(dot)}</td>
        ))}
      </tr>
    );
  }

  renderSingleDot(dotTypeData) {
    return <Dot dotTypeString={dotTypeData} />;
  }

  render() {
    const levelNodeJson = this.props.data;
    const levelData = JSON.parse(levelNodeJson.level_blob);

    return (
      <div className='board'>
        <div>
          <p>Gloal Level Number: {levelNodeJson.global_level_number}</p>
          <p>World Number: {levelData.world_number}</p>
          <p>Moves: {levelData.limiter_amount}</p>
          <img src='./images/purpleDot.png' alt='' width='20' height='20' />
        </div>
        <div classname='BoardGrid'>{this.renderDots(levelData)}</div>
      </div>
    );
  }
}

function GetDotsInTwoDimensionalArray(dotsDataFromJson, numberOfDotsPerRow) {
  let twoDimensionArray = [];
  let indexInArray = 0;

  // dots layout are serialized from bottom left to top right
  const layoutData = dotsDataFromJson.reverse();

  for (let i = 0; i < layoutData.length; i += numberOfDotsPerRow) {
    let rowData = layoutData.slice(i, i + numberOfDotsPerRow);
    rowData.reverse();
    twoDimensionArray[indexInArray] = rowData;
    indexInArray++;
  }

  return twoDimensionArray;
}

export default Board;
