/* Actions */
export const TICTAC_MOVE = 'TICTAC_MOVE'

/* Action creators */

export function makeTicTacMove(position) {
  console.log(position)
  return {
    type: TICTAC_MOVE,
    position
  }
}
