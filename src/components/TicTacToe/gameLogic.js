function winChecker (store) {
  let xMoves = []
  let oMoves = []
  let state = store.getState()
  for (let squares in state.tictacboard) {
    if (state.tictacboard[squares] === 'X') {
      xMoves.push(squares)
    }
    if (state.tictacboard[squares] === 'O') {
      oMoves.push(squares)
    }
  }
  if (xMoves.length > 2) {
    let xString = xMoves.join('')
    if (xString.match(/TOP/g) && xString.match(/TOP/g).length === 3) {
      console.log('x wins from top')
    }
    if (xString.match(/MID/g) && xString.match(/MID/g).length === 3) {
      console.log('x wins from mid')
    }
    if (xString.match(/BOT/g) && xString.match(/BOT/g).length === 3) {
      console.log('x wins from bot')
    }
    if (xString.match(/LEFT/g) && xString.match(/LEFT/g).length === 3) {
      console.log('x wins from left')
    }
    if (xString.match(/CENTER/g) && xString.match(/CENTER/g).length === 3) {
      console.log('x wins from center')
    }
    if (xString.match(/RIGHT/g) && xString.match(/RIGHT/g).length === 3) {
      console.log('x wins from right')
    }
    if (
      xString.match(/TOP_LEFT/g) &&
      xString.match(/MID_CENTER/g) &&
      xString.match(/BOT_RIGHT/g) ) {
      console.log('x wins diagonal top left to bottom right')
    }
    if (
      xString.match(/TOP_RIGHT/g) &&
      xString.match(/MID_CENTER/g) &&
      xString.match(/BOT_LEFT/g) ) {
      console.log('x wins diagonal top left to bottom right')
    }
  }
  if (oMoves.length > 2) {
    let oString = oMoves.join('')
    if (oString.match(/TOP/g) && oString.match(/TOP/g).length === 3) {
      console.log('o wins from top')
    }
    if (oString.match(/MID/g) && oString.match(/MID/g).length === 3) {
      console.log('o wins from mid')
    }
    if (oString.match(/BOT/g) && oString.match(/BOT/g).length === 3) {
      console.log('o wins from bot')
    }
    if (oString.match(/LEFT/g) && oString.match(/LEFT/g).length === 3) {
      console.log('o wins from left')
    }
    if (oString.match(/CENTER/g) && oString.match(/CENTER/g).length === 3) {
      console.log('o wins from center')
    }
    if (oString.match(/RIGHT/g) && oString.match(/RIGHT/g).length === 3) {
      console.log('o wins from right')
    }
    if (
      oString.match(/TOP_LEFT/g) &&
      oString.match(/MID_CENTER/g) &&
      oString.match(/BOT_RIGHT/g) ) {
      console.log('o wins diagonal top left to bottom right')
    }
    if (
      oString.match(/TOP_RIGHT/g) &&
      oString.match(/MID_CENTER/g) &&
      oString.match(/BOT_LEFT/g) ) {
      console.log('o wins diagonal top left to bottom right')
    }
  }
}

export default winChecker
