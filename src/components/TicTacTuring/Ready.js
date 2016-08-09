import React, {Component, PropTypes} from 'react'
import s from './TicTacTuring.css'
import {Modal} from 'react-bootstrap'


const xImage = require('./imgs/x.png')
const oImage = require('./imgs/o.png')
const robot = require('./imgs/robot.png')

function Ready(props) {
  return (
    <Modal show={true}>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  )
}


export default Ready
