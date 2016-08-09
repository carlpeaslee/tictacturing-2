import React from 'react'
import s from './TicTacTuring.css'

function EndGameMarkers(props) {
  return (
    <div className={s.endGameMarkers}>
      {props.locationOfWin === 'TOP' ? <div className={s.topWin}/> : null}
      {props.locationOfWin === 'MID' ? <div className={s.midWin}/> : null}
      {props.locationOfWin === 'BOT' ? <div className={s.botWin}/> : null}
      {props.locationOfWin === 'LEFT' ? <div className={s.leftWin}/> : null}
      {props.locationOfWin === 'CENTER' ? <div className={s.centerWin}/> : null}
      {props.locationOfWin === 'RIGHT' ? <div className={s.rightWin}/> : null}
      {props.locationOfWin === 'DIAGONAL_TOP_LEFT' ? <div className={s.topLeftWin}/> : null}
      {props.locationOfWin === 'DIAGONAL_BOTTOM_LEFT' ? <div className={s.botLeftWin}/> : null}
    </div>
  )
}

export default EndGameMarkers
