import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {makeTicTacMove, readyAction, startGame, turingTest} from '../../redux/actions'
import TicTacToeBoard from '../../components/TicTacToe/TicTacToeBoard'
import BoardDisplay from '../../components/TicTacToe/BoardDisplay'
import EndGameMarkers from '../../components/TicTacToe/EndGameMarkers'
import AlertBar from '../../components/AlertBar/AlertBar'
import Prompts from '../../components/Prompts/Prompts'
import {gameStateManager} from '../../components/TicTacToe/gameLogic'
import {Row, Col} from 'react-bootstrap'

class TicTacTuring extends Component {
  static propTypes = {
    tictacboard: PropTypes.object.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
    onReadyClick: PropTypes.func.isRequired,
    dispatchStart: PropTypes.func.isRequired,
    locationOfWin: PropTypes.string.isRequired,
    turingTestClick: PropTypes.func.isRequired
  }
  componentDidUpdate () {
    gameStateManager()
  }
  render() {
    return (
      <div>
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
            />
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tictacboard: state.tictacboard,
    gameState: state.gameState,
    locationOfWin: state.endGameState.locationOfWin
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
    },
    turingTestClick: (choice) => {
      dispatch(turingTest(choice))
    },
  }
}

TicTacTuring = connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacTuring)

export default TicTacTuring
