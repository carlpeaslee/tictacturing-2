import React, { Component, PropTypes } from 'react'
import TicTacToeSquare from './TicTacToeSquare'
import styles from '../../styles'


class TicTacToeBoard extends Component {
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

export default TicTacToeBoard
