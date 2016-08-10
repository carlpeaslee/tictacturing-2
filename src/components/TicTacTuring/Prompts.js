import React from 'react'
import Ready from './Ready'
import TuringTest from './TuringTest'
import {Modal} from 'react-bootstrap'

import s from './TicTacTuring.css'

function Prompts(props) {
  const promptCreator = () => {
    switch (props.gameState) {
      case 'WELCOME': {
        return (
          <Ready
            onReadyClick={props.onReadyClick}
          />
        )
      }
      case 'GAME_OVER': {
        return (
          <TuringTest
            turingTestClick={props.turingTestClick}
          />
        )
      }
      default:
      case 'DEFAULT': {
        return
      }
    }
  }
  return (
    <div className={s.alertBar}>
      {promptCreator()}
    </div>
  )
}

export default Prompts
