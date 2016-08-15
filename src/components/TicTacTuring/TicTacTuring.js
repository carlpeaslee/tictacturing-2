import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {Row, Col} from 'react-bootstrap'

import s from './TicTacTuring.css'

import { connect } from 'react-redux'
import {makeTicTacMove, readyAction, startGame, turingTest, endGame, receiveOpponentMove, fetchShit, asyncTicTacMove} from '../../actions/tictacturing'
import TicTacToeBoard from './TicTacToeBoard'
import BoardDisplay from './BoardDisplay'
import EndGameMarkers from './EndGameMarkers'
import AlertBar from './AlertBar'
import Prompts from './Prompts'
import GitHubButton from './GitHubButton'
import AsyncBar from './AsyncBar'
import {gameStateManager} from './gameLogic'

class TicTacTuring extends Component {
  static propTypes = {
    tictacboard: PropTypes.object.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
    onReadyClick: PropTypes.func.isRequired,
    dispatchStart: PropTypes.func.isRequired,
    locationOfWin: PropTypes.string.isRequired,
    turingTestClick: PropTypes.func.isRequired,
    dispatchEnd: PropTypes.func.isRequired,
    dispatchOpponentMove: PropTypes.func.isRequired,
    dispatchFetchShit: PropTypes.func.isRequired
  }
  componentDidUpdate () {
    const gameState = this.props.gameState
    const startGame = this.props.dispatchStart
    const tictacboard = this.props.tictacboard
    const dispatchEnd = this.props.dispatchEnd
    const dispatchOpponentMove = this.props.dispatchOpponentMove
    gameStateManager(gameState, startGame, tictacboard, dispatchEnd, dispatchOpponentMove)
  }
  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col  lg={1} md={1} lgPush={11} mdPush={11} className={s.githubBar}>
            <GitHubButton/>
          </Col>
        </Row>
        <Prompts
          gameState={this.props.gameState}
          onReadyClick={this.props.onReadyClick}
          turingTestClick={this.props.turingTestClick}
        />
        <AlertBar
          gameState={this.props.gameState}
          dispatchStart={this.props.dispatchStart}
        />
        <Row>
          <Col>
            <BoardDisplay/>
            <EndGameMarkers
              locationOfWin={this.props.locationOfWin}
            />
            <TicTacToeBoard
              tictacboard={this.props.tictacboard}
              onSquareClick={this.props.onSquareClick}
              gameState={this.props.gameState}
            />
          </Col>
        </Row>
        <Row>
          <AsyncBar
          dispatchFetchShit={this.props.dispatchFetchShit}
          />
        </Row>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tictacboard: state.tictacturing.tictacboard,
    gameState: state.tictacturing.gameState,
    locationOfWin: state.tictacturing.endGameState.locationOfWin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (position, mark) => {
      dispatch(asyncTicTacMove(position, mark))
    },
    onReadyClick: () => {
      dispatch(readyAction())
    },
    dispatchStart: () => {
      dispatch(startGame())
    },
    turingTestClick: (choice) => {
      dispatch(turingTest(choice))
    },
    dispatchEnd: (winningPlayer, locationOfWin) => {
      dispatch(endGame(winningPlayer, locationOfWin))
    },
    dispatchOpponentMove: (move) => {
      dispatch(receiveOpponentMove(move))
    },
    dispatchFetchShit: () => {
      dispatch(fetchShit())
    }
  }
}

TicTacTuring = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacTuring)

export default withStyles(s)(TicTacTuring)
