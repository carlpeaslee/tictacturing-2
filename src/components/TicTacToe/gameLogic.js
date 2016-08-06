import ai from '../../ai/ai'
import {endGame, startGame} from '../../redux/actions'
import store from '../../redux/store'

export function gameStateManager () {
  let gameState = store.getState().gameState
  switch (gameState) {
    case 'FINDING_OPPONENT': {
      setTimeout(
        () => {store.dispatch(startGame())},
        2000
      )
      return null
    }
    case 'CHECKING_GAMESTATE': {
      return null
    }
    case 'OPPONENT_TURN': {
      let endGameInfo = winChecker()
      if (endGameInfo) {
        store.dispatch(endGame(endGameInfo.winningPlayer, endGameInfo.locationOfWin))
      } else {
        setTimeout(
          ai,
          2000
        )
      }
      return null
    }
    case 'YOUR_TURN': {
      let endGameInfo = winChecker()
      if (endGameInfo) {
        store.dispatch(endGame(endGameInfo.winningPlayer, endGameInfo.locationOfWin))
      }
      return null
    }
    default:
    case 'WELCOME': {
      return null
    }
  }
}

export function winChecker () {
  let xMoves = []
  let oMoves = []
  let tictacboard = store.getState().tictacboard
  for (let squares in tictacboard) {
    if (tictacboard[squares] === 'X') {
      xMoves.push(squares)
    }
    if (tictacboard[squares] === 'O') {
      oMoves.push(squares)
    }
  }
  if (xMoves.length > 2) {
    let xString = xMoves.join('')
    if (xString.match(/TOP/g) && xString.match(/TOP/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'TOP'
      }
    }
    if (xString.match(/MID/g) && xString.match(/MID/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'MID'
      }
    }
    if (xString.match(/BOT/g) && xString.match(/BOT/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'BOT'
      }
    }
    if (xString.match(/LEFT/g) && xString.match(/LEFT/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'LEFT'
      }
    }
    if (xString.match(/CENTER/g) && xString.match(/CENTER/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'CENTER'
      }
    }
    if (xString.match(/RIGHT/g) && xString.match(/RIGHT/g).length === 3) {
      return {
        winningPlayer: 'X',
        locationOfWin: 'RIGHT'
      }
    }
    if (
      xString.match(/TOP_LEFT/g) &&
      xString.match(/MID_CENTER/g) &&
      xString.match(/BOT_RIGHT/g) ) {
        return {
          winningPlayer: 'X',
          locationOfWin: 'DIAGONAL_TOP_LEFT'
        }
    }
    if (
      xString.match(/TOP_RIGHT/g) &&
      xString.match(/MID_CENTER/g) &&
      xString.match(/BOT_LEFT/g) ) {
        return {
          winningPlayer: 'X',
          locationOfWin: 'DIAGONAL_BOTTOM_LEFT'
        }
    }
  }
  if (oMoves.length > 2) {
    let oString = oMoves.join('')
    if (oString.match(/TOP/g) && oString.match(/TOP/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'TOP'
      }
    }
    if (oString.match(/MID/g) && oString.match(/MID/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'MID'
      }
    }
    if (oString.match(/BOT/g) && oString.match(/BOT/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'BOT'
      }
    }
    if (oString.match(/LEFT/g) && oString.match(/LEFT/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'LEFT'
      }
    }
    if (oString.match(/CENTER/g) && oString.match(/CENTER/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'CENTER'
      }
    }
    if (oString.match(/RIGHT/g) && oString.match(/RIGHT/g).length === 3) {
      return {
        winningPlayer: 'O',
        locationOfWin: 'RIGHT'
      }
    }
    if (
      oString.match(/TOP_LEFT/g) &&
      oString.match(/MID_CENTER/g) &&
      oString.match(/BOT_RIGHT/g) ) {
        return {
          winningPlayer: 'O',
          locationOfWin: 'DIAGONAL_TOP_LEFT'
        }
    }
    if (
      oString.match(/TOP_RIGHT/g) &&
      oString.match(/MID_CENTER/g) &&
      oString.match(/BOT_LEFT/g) ) {
        return {
          winningPlayer: 'O',
          locationOfWin: 'DIAGONAL_BOTTOM_LEFT'
        }
    }
  }
  if (xMoves.length + oMoves.length === 9) {
    return {
      winningPlayer: 'TIE',
      locationOfWin: "CAT'S GAME"
    }
  }
  else {
    return false
  }
}
