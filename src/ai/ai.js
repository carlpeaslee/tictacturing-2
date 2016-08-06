import {receiveOpponentMove} from '../redux/actions'
import store from '../redux/store'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function ai () {
  let possibleMoves = []
  const shit = store.getState()
  for (let poop in shit.tictacboard) {
    if (shit.tictacboard[poop] === 'EMPTY') {
      possibleMoves.push(poop)
    }
  }
  const move = possibleMoves[getRandomInt(0, possibleMoves.length)]
  store.dispatch(receiveOpponentMove(move))
}

export default ai
