import React, {Component, PropTypes} from 'react'
// import styles from '../../styles'
import {Modal} from 'react-bootstrap'
import styles from '../../styles'

//a note: some of the modal's styles are being separately uploaded in root index.js

// const question = require('../TicTacToe/imgs/question.png')
const robot = require('../TicTacToe/imgs/robot.png')
const person = require('../TicTacToe/imgs/person.png')

class TuringTest extends Component {
  static propTypes = {
    turingTestClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <Modal show={true}>
        <Modal.Body>
          <div style={styles.turingTest}>
            <button
              onClick={() => this.props.turingTestClick('ROBOT')}
              style={styles.turingButton}
            >
              <img src={robot} alt={'robot'}/>
            </button>
            <button
              onClick={() => this.props.turingTestClick('PERSON')}
              style={styles.turingButton}
            >
              <img src={person} alt={'person'}/>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default TuringTest
