import React, {Component, PropTypes} from 'react'
// import styles from '../../styles'
// import {Modal} from 'react-bootstrap'
import Ready from './Ready'
import TuringTest from './TuringTest'

class Prompts extends Component {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    onReadyClick: PropTypes.func.isRequired,
    turingTestClick: PropTypes.func.isRequired
  }
  render() {
    const ready = () => {
      return (
        <Ready
          onReadyClick={this.props.onReadyClick}
        />
      )
    }
    const nothing = () => {
      return (
        <div></div>
      )
    }
    const turingTest = () => {
      return (
        <TuringTest
          turingTestClick={this.props.turingTestClick}
        />
      )
    }

    const gameState = this.props.gameState
    let displayPrompt = {}
    const promptCreator = () => {
      switch (gameState) {
        case 'WELCOME': {
          displayPrompt = ready()
          return {
            displayPrompt
          }
        }
        case 'GAME_OVER': {
          displayPrompt = turingTest()
          return {
            displayPrompt
          }
        }
        default: {
          displayPrompt = nothing()
          return {
            displayPrompt
          }
        }
      }
    }
    promptCreator()
    return (
      <div>
        {displayPrompt}
      </div>
    )
  }
}

export default Prompts
