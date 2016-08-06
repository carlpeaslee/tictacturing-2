import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import {Row, Col} from 'react-bootstrap'
import store from '../../redux/store'


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
          return {
            message
          }
        }
        case 'OPPONENT_TURN': {
          message = "waiting for opponent move..."
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
        case 'GAME_OVER': {
          let winner = store.getState().endGameState.winningPlayer
          message = "game over: the " + winner + "'s won!"
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
