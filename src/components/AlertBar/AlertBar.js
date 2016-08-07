import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import {Row, Col} from 'react-bootstrap'
import store from '../../redux/store'

const ant = require('../TicTacToe/imgs/ant.png')
const satellite = require('../TicTacToe/imgs/satellite.png')
const stopwatch = require('../TicTacToe/imgs/stopwatch.png')
const telescope = require('../TicTacToe/imgs/telescope.png')
const empty = require('../TicTacToe/imgs/empty.png')
const thumbsup = require('../TicTacToe/imgs/thumbsup.png')
// const person = require('../TicTacToe/imgs/person.png')
const trophy = require('../TicTacToe/imgs/trophy.png')
const bullseye = require('../TicTacToe/imgs/bullseye.png')
const confetti = require('../TicTacToe/imgs/confetti.png')
const fireworks = require('../TicTacToe/imgs/fireworks.png')
const no = require('../TicTacToe/imgs/no.png')
const x = require('../TicTacToe/imgs/x.png')
const o = require('../TicTacToe/imgs/o.png')
const catjoy = require('../TicTacToe/imgs/catjoy.png')
const catsad = require('../TicTacToe/imgs/catsad.png')

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
          return (
            <div>
              <img src={stopwatch} alt={'stopwatch'}/>
              <img src={o} alt={'o'}/>
              <img src={stopwatch} alt={'stopwatch'}/>
            </div>
          )
        }
        case 'YOUR_TURN': {
          return (
            <div>
              <img src={thumbsup} alt={'thumbsup'}/>
              <img src={x} alt={'x'}/>
              <img src={thumbsup} alt={'thumbsup'}/>
            </div>
          )
        }
        case 'GAME_OVER': {
          const endGameState = store.getState().endGameState
          switch (endGameState.winningPlayer) {
            case 'X': {
              return (
                <div>
                  <img src={trophy} alt={'trophy'}/>)
                  <img src={confetti} alt={'confetti'}/>)
                  <img src={bullseye} alt={'bullseye'}/>)
                  <img src={fireworks} alt={'fireworks'}/>)
                </div>
              )
            }
            case 'O': {
              return (<img src={no} alt={'no'}/>)
            }
            default:
            case 'TIE': {
              return (
                <div>
                  <img src={catjoy} alt={'cat joy'}/>
                  <img src={catsad} alt={'cat sad'}/>)
                </div>
              )
            }
          }
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
