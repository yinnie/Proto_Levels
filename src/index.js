import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import board1 from './data/Level_1';
import board2 from './data/Level_2';
import board3 from './data/Level_3';

function GetCatalogueData() {
  // TODO. Replace with fetching data from database
  return [board1, board2, board3];
}

class Catalogue extends React.Component {
  renderBoard(boardData) {
    return (
      <div>
        <Board data={boardData} />
      </div>
    );
  }

  render() {
    const allBoards = GetCatalogueData();

    return (
      <div className='gridWrapper'>
        {allBoards.map(board => (
          <div>{this.renderBoard(board)}</div>
        ))}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Catalogue />, document.getElementById('root'));
