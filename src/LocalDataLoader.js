import board1 from './data/Level_1';
import board2 from './data/Level_2';
import board3 from './data/Level_3';
import board4 from './data/Level_4';
import board5 from './data/Level_5';
import board6 from './data/Level_6';
import board7 from './data/Level_7';
import board8 from './data/Level_8';
import board9 from './data/Level_9';
import board10 from './data/Level_10';

class localDataLoader {
  getLocalData = function() {
    return [
      board1,
      board2,
      board3,
      board4,
      board5,
      board6,
      board7,
      board8,
      board9,
      board10
    ];
  };
}

export default new localDataLoader();
