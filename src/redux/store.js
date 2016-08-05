import { createStore } from 'redux'
import {reducer} from './reducer'

const INITIAL_STATE = {
  tictacboard: {
    TOP_LEFT: '-',
    TOP_MIDDLE: '-',
    TOP_RIGHT: '-',
    MIDDLE_LEFT: '-',
    MIDDLE_MIDDLE: '-',
    MIDDLE_RIGHT: '-',
    BOTTOM_LEFT: '-',
    BOTTOM_MIDDLE: '-',
    BOTTOM_RIGHT: '-'
  },
  currentTurn: 'X',
  playerMark: 'X'
}


let store = createStore(
  reducer,
  INITIAL_STATE,
  window.devToolsExtension ? window.devToolsExtension(): undefined
);

export default store
