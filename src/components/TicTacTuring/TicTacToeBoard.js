import React, { Component, PropTypes } from 'react'
import TicTacToeSquare from './TicTacToeSquare'
import s from './TicTacTuring.css'
import {INITIAL_STATE} from '../../constants'


function TicTacToeBoard(props) {
  const poop = INITIAL_STATE.tictacboard
  function squareGenerator() {
    const squares = []
    for (let square in poop) {
      squares.push(
        <TicTacToeSquare
          key={square}
          position={square}
          onSquareClick={props.onSquareClick}
          mark={props.tictacboard[square]}
          gameState={props.gameState}
        />
      )
    }
    return squares
  }
  return (
    <div className={s.boardDisplay}>
      {squareGenerator()}
    </div>
  )
}

export default TicTacToeBoard

//
// <div className={s.boardDisplay}>
//   <TicTacToeSquare
//     position={"TOP_LEFT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.TOP_LEFT}
//     gameState={props.gameState}
//   />
//   <TicTacToeSquare
//     position={"TOP_CENTER"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.TOP_CENTER}
//   />
//   <TicTacToeSquare
//     position={"TOP_RIGHT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.TOP_RIGHT}
//   />
//   <TicTacToeSquare
//     position={"MID_LEFT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.MID_LEFT}
//   />
//   <TicTacToeSquare
//     position={"MID_CENTER"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.MID_CENTER}
//   />
//   <TicTacToeSquare
//     position={"MID_RIGHT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.MID_RIGHT}
//   />
//   <TicTacToeSquare
//     position={"BOT_LEFT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.BOT_LEFT}
//   />
//   <TicTacToeSquare
//     position={"BOT_CENTER"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.BOT_CENTER}
//   />
//   <TicTacToeSquare
//     position={"BOT_RIGHT"}
//     onSquareClick={props.onSquareClick}
//     mark={props.tictacboard.BOT_RIGHT}
//   />
// </div>
