import {receiveOpponentMove} from '../redux/actions'
import store from '../redux/store'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function ai () {
  let possibleMoves = []
  let state = store.getState()
  for (let squares in state.tictacboard) {
    if (state.tictacboard[squares] === 'EMPTY') {
      possibleMoves.push(squares)
    }
  }
  let move = possibleMoves[getRandomInt(0, possibleMoves.length - 1)]
  console.log('ai move:', move)
  store.dispatch(receiveOpponentMove(move))
}

export default ai
