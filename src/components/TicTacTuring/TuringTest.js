import React, {Component, PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import s from './TicTacTuring.css'

const question = require('./imgs/question.png')
const robot = require('./imgs/robot.png')
const person = require('./imgs/person.png')

function TuringTest(props) {
  return (
    <Modal
      show={true}
    >
      <Modal.Body>
        <div>
          <button
            onClick={() => props.turingTestClick('ROBOT')}
            className={s.turingButton}
          >
            <img src={robot} alt={'robot'}/>
          </button>
          <button
            onClick={() => props.turingTestClick('PERSON')}
            className={s.turingButton}
          >
            <img src={person} alt={'person'}/>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}


export default TuringTest
