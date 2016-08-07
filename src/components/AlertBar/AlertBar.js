import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import {Row, Col} from 'react-bootstrap'

const ant = require('../TicTacToe/imgs/ant.png')
const satellite = require('../TicTacToe/imgs/satellite.png')
const stopwatch = require('../TicTacToe/imgs/stopwatch.png')
const telescope = require('../TicTacToe/imgs/telescope.png')
const empty = require('../TicTacToe/imgs/empty.png')
const thumbsup = require('../TicTacToe/imgs/thumbsup.png')
const person = require('../TicTacToe/imgs/person.png')

class AlertBar extends Component {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    dispatchStart: PropTypes.func.isRequired
  }
  render() {
    const messageCreator = () => {
      switch (this.props.gameState) {
        case 'FINDING_OPPONENT': {
          return (
            <div>
              <img src={ant} alt={'ant'}/>
              <img src={telescope} alt={'telescope'}/>
              <img src={satellite} alt={'satellite'}/>
            </div>
          )
        }
        case 'OPPONENT_TURN': {
          return (<img src={stopwatch} alt={'stopwatch'}/>
          )
        }
        case 'YOUR_TURN': {
          return (
            <div>
              <img src={thumbsup} alt={'thumbsup'}/>
              <img src={person} alt={'person'}/>
            </div>
          )
        }
        case 'GAME_OVER': {
          return (<img src={telescope} alt={'telescope'}/>)
        }
        default:
        case 'WELCOME': {
          return (<img src={empty} alt={'empty'}/>)
        }
      }
    }
    return (
      <Row>
        <Col style={styles.alertBar.basic}>
         {messageCreator()}
        </Col>
      </Row>
    )
  }
}

export default AlertBar
