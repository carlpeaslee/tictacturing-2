import { createStore } from 'redux'
import {reducer} from './reducer'

const INITIAL_STATE = {
  tictacboard: {
    TOP_LEFT: 'EMPTY',
    TOP_MIDDLE: 'EMPTY',
    TOP_RIGHT: 'EMPTY',
    MIDDLE_LEFT: 'EMPTY',
    MIDDLE_MIDDLE: 'EMPTY',
    MIDDLE_RIGHT: 'EMPTY',
    BOTTOM_LEFT: 'EMPTY',
    BOTTOM_MIDDLE: 'EMPTY',
    BOTTOM_RIGHT: 'EMPTY'
  },
  gameState: 'WELCOME',
  playerMark: 'X'
}


let store = createStore(
  reducer,
  INITIAL_STATE,
  window.devToolsExtension ? window.devToolsExtension(): undefined
);

export default store
