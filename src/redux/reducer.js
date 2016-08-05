import {TICTAC_MOVE} from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case TICTAC_MOVE: {
      let newBoard = {
        ...state.tictacboard
      }
      newBoard[action.position] = state.playerMark
      return {
        ...state,
        tictacboard: newBoard
      }
    }
    default: {
      return state;
    }
  }
}
