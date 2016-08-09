import {TICTAC_MOVE, READY, START_GAME, RECEIVE_OPPONENT_MOVE, TURING_TEST, END_GAME} from '../actions/tictacturing'
import {INITIAL_STATE} from '../constants'

function tictacturing(state = {...INITIAL_STATE}, action) {
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
    case TURING_TEST: {
      return {
        ...INITIAL_STATE,
        gameState: 'FINDING_OPPONENT'
      }
    }
    default: {
      return state;
    }
  }
}

export default tictacturing
