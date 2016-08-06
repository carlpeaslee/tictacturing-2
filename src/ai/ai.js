import {receiveOpponentMove} from '../redux/actions'
import store from '../redux/store'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const possibleMoves = ['TOP_LEFT',
    'TOP_MIDDLE',
    'TOP_RIGHT',
    'MIDDLE_LEFT',
    'MIDDLE_MIDDLE',
    'MIDDLE_RIGHT',
    'BOTTOM_LEFT',
    'BOTTOM_MIDDLE',
    'BOTTOM_RIGHT'
  ]

function ai () {
  const move = possibleMoves[getRandomInt(0,8)]
  store.dispatch(receiveOpponentMove(move))
}

export default ai
