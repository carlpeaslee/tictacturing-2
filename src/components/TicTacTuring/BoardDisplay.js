import React from 'react'

import s from './TicTacTuring.css'


function BoardDisplay() {
  return (
    <div className={s.boardDisplay}>
        <div className={s.leftVerticalLine}></div>
        <div className={s.rightVerticalLine}></div>
        <div className={s.topHorizontalLine}></div>
        <div className={s.botHorizontalLine}></div>
    </div>
  )
}


export default BoardDisplay
