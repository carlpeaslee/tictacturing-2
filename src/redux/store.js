import { createStore } from 'redux'
import {reducer} from './reducer'

const INITIAL_STATE = {
  tictacboard: {
    topLeft: 'empty',
    topMiddle: 'empty',
    topRight: 'empty',
    middleLeft: 'empty',
    middleMiddle: 'empty',
    middleRight: 'empty',
    bottomLeft: 'empty',
    bottomMiddle: 'empty',
    bottomRight: 'empty'
  }
}


let store = createStore(
  reducer,
  INITIAL_STATE,
  window.devToolsExtension ? window.devToolsExtension(): undefined
);

export default store
