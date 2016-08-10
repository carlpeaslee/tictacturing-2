import React, {Component, PropTypes} from 'react'
import s from './TicTacTuring.css'
import {Row, Col} from 'react-bootstrap'

const ant = require('./imgs/ant.png')
const satellite = require('./imgs/satellite.png')
const stopwatch = require('./imgs/stopwatch.png')
const telescope = require('./imgs/telescope.png')
const empty = require('./imgs/empty.png')
const thumbsup = require('./imgs/thumbsup.png')
const person = require('./imgs/person.png')
const trophy = require('./imgs/trophy.png')
const bullseye = require('./imgs/bullseye.png')
const confetti = require('./imgs/confetti.png')
const fireworks = require('./imgs/fireworks.png')
const no = require('./imgs/no.png')
const x = require('./imgs/x.png')
const o = require('./imgs/o.png')
const catjoy = require('./imgs/catjoy.png')
const catsad = require('./imgs/catsad.png')

function AlertBar(props){
  const messageCreator = () => {
    switch (props.gameState) {
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
        switch (props.gameState.winningPlayer) {
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
      <Col>
        <div className={s.alertBar}>
          {messageCreator()}
        </div>
      </Col>
    </Row>
  )
}

export default AlertBar
