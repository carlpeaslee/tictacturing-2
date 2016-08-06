import {TICTAC_MOVE, READY, START_GAME, RECEIVE_OPPONENT_MOVE} from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case TICTAC_MOVE: {
      let newBoard = {
        ...state.tictacboard
      }
      newBoard[action.position] = state.playerMark
      return {
        ...state,
        tictacboard: newBoard,
        gameState: 'OPPONENT_TURN'
      }
    }
    case RECEIVE_OPPONENT_MOVE: {
      let newBoard = {
        ...state.tictacboard
      }
      newBoard[action.position] = "O"
      return {
        ...state,
        tictacboard: newBoard,
        gameState: 'YOUR_TURN'
      }
    }
    case READY: {
      return {
        ...state,
        gameState: 'FINDING_OPPONENT'
      }
    }
    case START_GAME: {
      return {
        ...state,
        gameState: 'YOUR_TURN'
      }
    }
    default: {
      return state;
    }
  }
}
