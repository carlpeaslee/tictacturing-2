/* Actions */
export const TICTAC_MOVE = 'TICTAC_MOVE'
export const READY = 'READY'
export const START_GAME = 'START_GAME'
export const RECEIVE_OPPONENT_MOVE = 'RECEIVE_OPPONENT_MOVE'
export const END_GAME = 'END_GAME'
export const TURING_TEST = 'TURING_TEST'


/* Action creators */

export function makeTicTacMove(position, mark) {
  return {
    type: TICTAC_MOVE,
    position,
    mark
  }
}

export function readyAction() {
  return {
    type: READY
  }
}

export function startGame() {
  return {
    type: START_GAME
  }
}

export function receiveOpponentMove(position) {
  return {
    type: RECEIVE_OPPONENT_MOVE,
    position
  }
}

export function endGame(winningPlayer, locationOfWin) {
  return {
    type: END_GAME,
    winningPlayer,
    locationOfWin
  }
}

export function turingTest(choice) {
  return {
    type: TURING_TEST,
    choice
  }
}
