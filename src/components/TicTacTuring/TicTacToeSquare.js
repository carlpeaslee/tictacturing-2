import React, {Component, PropTypes} from 'react'
import s from './TicTacTuring.css'

const xMark = require('./imgs/x.png')
const oMark = require('./imgs/o.png')
const emptyMark = require('./imgs/empty.png')

function TicTacToeSquare (props) {
  const handleSquareClick = () => {
    let position = props.position
    let mark = 'X'
    props.onSquareClick(position, mark)
  }
  const iconMark = () => {
    switch (props.mark) {
      case ('X'): {
        return (
          <img src={xMark} alt={'X'} className={s.centeredImage}/>
        )
      }
      case ('O'): {
        return (
          <img src={oMark} alt={'O'} className={s.centeredImage}/>
        )
      }
      default: {
        return (
          <img src={emptyMark} alt={'empty'} className={s.centeredImage}/>
        )
      }
    }
  }

  return (
    <div
      onClick={
        props.gameState === 'YOUR_TURN' && props.mark === 'EMPTY' ?
          () => {
            handleSquareClick()
          }
          :
          null
      }
      className={s.square}
    >
      {iconMark()}
    </div>
  )
}


export default TicTacToeSquare
