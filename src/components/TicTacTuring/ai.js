import {receiveOpponentMove} from '../../actions/tictacturing'
import store from '../../store/configureStore'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function ai (tictacboard, dispatchOpponentMove) {
  let possibleMoves = []
  for (let squares in tictacboard) {
    if (tictacboard[squares] === 'EMPTY') {
      possibleMoves.push(squares)
    }
  }
  let move = possibleMoves[getRandomInt(0, possibleMoves.length - 1)]
  console.log('ai move:', move)
  dispatchOpponentMove(move)
}

export default ai
