import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import ai from '../../ai'
import {Row, Col} from 'react-bootstrap'


class AlertBar extends Component {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    dispatchStart: PropTypes.func.isRequired
  }
  render() {
    const gameState = this.props.gameState
    let message = ''
    const messageCreator = () => {
      switch (this.props.gameState) {
        case 'FINDING_OPPONENT': {
          message = "searching for an opponent..."
          setTimeout(
            this.props.dispatchStart,
            2000
          )
          return {
            message
          }
        }
        case 'OPPONENT_TURN': {
          message = "waiting for opponent move..."
          setTimeout(
            ai,
            2000
          )
          return {
            message
          }
        }
        case 'YOUR_TURN': {
          message = "make your move"
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
