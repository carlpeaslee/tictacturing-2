import { createStore } from 'redux'
import {reducer} from './reducer'

const INITIAL_STATE = {
  tictacboard: {
    TOP_LEFT: 'EMPTY',
    TOP_CENTER: 'EMPTY',
    TOP_RIGHT: 'EMPTY',
    MID_LEFT: 'EMPTY',
    MID_CENTER: 'EMPTY',
    MID_RIGHT: 'EMPTY',
    BOT_LEFT: 'EMPTY',
    BOT_CENTER: 'EMPTY',
    BOT_RIGHT: 'EMPTY'
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
