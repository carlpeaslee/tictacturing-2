export const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

export const INITIAL_STATE = {
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
  playerMark: 'X',
  endGameState: {
    winningPlayer: '',
    locationOfWin: ''
  }
}
