import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {makeTicTacMove, readyAction, startGame} from '../../redux/actions'
import TicTacToeBoard from '../../components/TicTacToe/TicTacToeBoard'
import AlertBar from '../../components/AlertBar/AlertBar'
import Prompts from '../../components/Prompts/Prompts'
import store from '../../redux/store'
import winChecker from '../../components/TicTacToe/gameLogic'

class TicTacTuring extends Component {
  static propTypes = {
    tictacboard: PropTypes.object.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
    onReadyClick: PropTypes.func.isRequired,
    dispatchStart: PropTypes.func.isRequired
  }
  render() {
    winChecker(store)
    return (
      <div>
        <Prompts
          gameState={this.props.gameState}
          onReadyClick={this.props.onReadyClick}
        />
        <AlertBar
          gameState={this.props.gameState}
          dispatchStart={this.props.dispatchStart}
        />
        <TicTacToeBoard
          tictacboard={this.props.tictacboard}
          onSquareClick={this.props.onSquareClick}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tictacboard: state.tictacboard,
    gameState: state.gameState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (position, mark) => {
      dispatch(makeTicTacMove(position, mark))
    },
    onReadyClick: () => {
      dispatch(readyAction())
    },
    dispatchStart: () => {
      dispatch(startGame())
    }
  }
}

TicTacTuring = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacTuring)

export default TicTacTuring
