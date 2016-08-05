import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {makeTicTacMove} from '../../redux/actions'
import TicTacToeSquare from '../../components/TicTacToe/TicTacToeSquare'
import Radium from 'radium'

const styles = {
  board: {
    height: '52vw',
    width: '51vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  lines: {
    position: 'absolute'
  },
  verticalLine: {
    position: 'relative',
    display: 'inline-block',
    left: '.5vw',
    marginLeft: '16vw',
    height: '52vw',
    width: '1vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  horizontalLine: {
    position: 'relative',
    display: 'inline-block',
    height: '1vw',
    width: '52vw',
    top: '1vw',
    marginTop: '15.5vw',
    background: '#8A8A8A',
    zIndex: '2'
  }
}

class Board extends Component {
  static propTypes = {
    tictacboard: PropTypes.object.isRequired,
    onSquareClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className={'board'} style={styles.board}>
        <div style={styles.lines}>
          <div className={'verticalLine'} style={styles.verticalLine}></div>
          <div className={'verticalLine'} style={styles.verticalLine}></div>
        </div>
        <div style={styles.lines}>
          <div className={'horizontalLine'} style={styles.horizontalLine}></div>
          <div className={'horizontalLine'} style={styles.horizontalLine}></div>
        </div>
        <div>
          <TicTacToeSquare
            position={"TOP_LEFT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.TOP_LEFT}
          />
          <TicTacToeSquare
            position={"TOP_MIDDLE"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.TOP_MIDDLE}
          />
          <TicTacToeSquare
            position={"TOP_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.TOP_RIGHT}
          />
        </div>
        <div>
          <TicTacToeSquare
            position={"MIDDLE_LEFT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MIDDLE_LEFT}
          />
          <TicTacToeSquare
            position={"MIDDLE_MIDDLE"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MIDDLE_MIDDLE}
          />
          <TicTacToeSquare
            position={"MIDDLE_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MIDDLE_RIGHT}
          />
        </div>
        <div>
          <TicTacToeSquare
            position={"BOTTOM_LEFT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOTTOM_LEFT}
          />
          <TicTacToeSquare
            position={"BOTTOM_MIDDLE"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOTTOM_MIDDLE}
          />
          <TicTacToeSquare
            position={"BOTTOM_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOTTOM_RIGHT}
          />
        </div>
      </div>
    )
  }
}

Board = Radium(Board)

const mapStateToProps = (state) => {
  return {
    tictacboard: state.tictacboard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (position) => {
      dispatch(makeTicTacMove(position))
    }
  }
}

const TicTacTuring = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default TicTacTuring
