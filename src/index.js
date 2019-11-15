import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/testDots';

const levelNodeJson = data;
const levelData = JSON.parse(data.level_blob);

class Dot extends React.Component {
  render() {
    return <div className='dot'>{this.props.dotType}</div>;
  }
}

class Board extends React.Component {
  renderDots() {
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

  renderSingleDot(dotType) {
    return <Dot dotType={dotType} />;
  }

  render() {
    return (
      <div className='Board'>
        <div className='BoardHeading'>
          <p>Gloal Level Number: {levelNodeJson.global_level_number}</p>
          <p>World Number: {levelData.world_number}</p>
          <p>Moves: {levelData.limiter_amount}</p>
        </div>
        <div classname='BoardGrid'>{this.renderDots()}</div>
      </div>
    );
  }
}

function GetDotsInTwoDimensionalArray(dotsDataFromJson, numberOfDotsPerRow) {
  let twoDimensionArray = [];
  let indexInArray = 0;

  for (let i = 0; i < dotsDataFromJson.length; i += numberOfDotsPerRow) {
    let rowData = dotsDataFromJson.slice(i, i + numberOfDotsPerRow);
    twoDimensionArray[indexInArray] = rowData;
    indexInArray++;
  }

  return twoDimensionArray;
}

// ========================================

ReactDOM.render(<Board />, document.getElementById('root'));
