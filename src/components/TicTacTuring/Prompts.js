import React from 'react'
import Ready from './Ready'
import TuringTest from './TuringTest'

function Prompts(props) {
  const ready = () => {
    return (
      <Ready
        onReadyClick={props.onReadyClick}
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
        turingTestClick={props.turingTestClick}
      />
    )
  }
  const gameState = props.gameState
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

export default Prompts
