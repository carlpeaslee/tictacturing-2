import {TICTAC_MOVE, READY, START_GAME, RECEIVE_OPPONENT_MOVE, END_GAME} from './actions'

export function reducer(state, action) {
  switch (action.type) {
    case TICTAC_MOVE: {
      let newBoard = {
        ...state.tictacboard
      }
      newBoard[action.position] = action.mark
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
    case END_GAME: {
      return {
        ...state,
        gameState: 'GAME_OVER',
        endGameState: {
          winningPlayer: action.winningPlayer,
          locationOfWin: action.locationOfWin
        }

      }
    }
    default: {
      return state;
    }
  }
}
