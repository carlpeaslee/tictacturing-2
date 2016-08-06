import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import {Row, Col} from 'react-bootstrap'

class AlertBar extends Component {
  static propTypes = {
    gameState: PropTypes.string.isRequired
  }
  render() {
    const gameState = this.props.gameState
    let message = ''
    const messageCreator = () => {
      switch (this.props.gameState) {
        case 'YOUR_TURN': {
          message = "it's your turn"
          return {
            message
          }
        }
        default:
        case 'WELCOME': {
          message = 'welcome to the game'
          return {
            message
          }
        }
      }
    }
    messageCreator()
    return (
      <Row>
        <Col style={{...styles.alertBar.basic, ...styles.alertBar[gameState]}}>
          {message}
        </Col>
      </Row>
    )
  }
}

export default AlertBar
