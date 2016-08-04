import {TICTAC_MOVE} from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case TICTAC_MOVE: {
      console.log('tictacmove')
      return {
        ...state
      }
    }
    default: {
      return state;
    }
  }
}
