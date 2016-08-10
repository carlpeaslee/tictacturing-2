import React, {Component, PropTypes} from 'react'
import s from './TicTacTuring.css'


const xImage = require('./imgs/x.png')
const oImage = require('./imgs/o.png')
const robot = require('./imgs/robot.png')

function Ready(props) {
  return (
    <div>
          <button
            onClick={() => props.onReadyClick()}
            className={s.modalButton}
          >
            <div>
              <img src={xImage} alt={'X'}/>
              <img src={oImage} alt={'O'}/>
              <img src={robot} alt={'robot'}/>
            </div>
          </button>
    </div>
  )
}


export default Ready
