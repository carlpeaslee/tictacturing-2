import React, {Component, PropTypes} from 'react'
// import styles from '../../styles'
import {Modal} from 'react-bootstrap'
import styles from '../../styles'

//a note: some of the modal's styles are being separately uploaded in root index.js

const question = require('../TicTacToe/imgs/question.png')
const xImage = require('../TicTacToe/imgs/x.png')
const oImage = require('../TicTacToe/imgs/o.png')
const robot = require('../TicTacToe/imgs/robot.png')
const person = require('../TicTacToe/imgs/person.png')

class Ready extends Component {
  static propTypes = {
    onReadyClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <Modal show={true}>
        <Modal.Body>
          <button
            onClick={() => this.props.onReadyClick()}
            style={styles.modalButton}
          >
            <div>
              <img src={xImage} alt={'X'}/>
              <img src={oImage} alt={'O'}/>
            </div>
            <div>
              <img src={robot} alt={'robot'}/>
              <img src={question} alt={'question'}/>
              <img src={person} alt={'person'}/>
            </div>
          </button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Ready
