import { createStore } from 'redux';
import {reducer} from './reducer';

const INITIAL_STATE = {
  tictacboard: []
}


let store = createStore(
  reducer,
  INITIAL_STATE,
  window.devToolsExtension ? window.devToolsExtension(): undefined
);

export default store;
