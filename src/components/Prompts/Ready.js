import React, {Component, PropTypes} from 'react'
// import styles from '../../styles'
import {Modal} from 'react-bootstrap'

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
          >ready?</button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Ready
