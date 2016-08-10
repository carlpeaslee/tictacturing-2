import React, {Component, PropTypes} from 'react'
// import styles from '../../styles'
import {Modal} from 'react-bootstrap'
import styles from '../../styles'

//a note: some of the modal's styles are being separately uploaded in root index.js

const xImage = require('../TicTacToe/imgs/x.png')
const oImage = require('../TicTacToe/imgs/o.png')
const robot = require('../TicTacToe/imgs/robot.png')

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
              <img src={robot} alt={'robot'}/>
            </div>
          </button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Ready
