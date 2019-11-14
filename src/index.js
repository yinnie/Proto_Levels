import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/testDots';

class Board extends React.Component {
  render() {
    const dotsData = data.dots;
    const width = data.width;

    const dotsLayout = GetDotsLayout(dotsData, width);

    return (
      <table>
        {dotsLayout.map((row, index) => (
          <tr>
            {row.map(dot => (
              <td>{dot}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}

function GetDotsLayout(dotsDataFromJson, numberOfDotsPerRow) {
  let doubleArray = new Array();

  for (let i = 0; i < dotsDataFromJson.length; i += numberOfDotsPerRow) {
    let rowData = dotsDataFromJson.slice(i, numberOfDotsPerRow);
    doubleArray.push(rowData);

    alert('one row');
  }

  return doubleArray;
}

// ========================================

ReactDOM.render(<Board />, document.getElementById('root'));
