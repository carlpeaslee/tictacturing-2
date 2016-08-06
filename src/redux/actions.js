/* Actions */
export const TICTAC_MOVE = 'TICTAC_MOVE'
export const READY = 'READY'
export const START_GAME = 'START_GAME'
export const RECEIVE_OPPONENT_MOVE = 'RECEIVE_OPPONENT_MOVE'

/* Action creators */

export function makeTicTacMove(position) {
  return {
    type: TICTAC_MOVE,
    position
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
