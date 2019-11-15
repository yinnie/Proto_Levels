import React from 'react';
import './index.css';
import Board from './Board';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
  }

  renderBoard(boardData) {
    return (
      <div>
        <Board data={boardData} />
      </div>
    );
  }

  render() {
    return (
      <div className='gridWrapper'>
        {this.props.data.map(board => (
          <div>{this.renderBoard(board)}</div>
        ))}
      </div>
    );
  }
}

export default AppContainer;
