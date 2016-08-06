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
            position={"TOP_CENTER"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.TOP_CENTER}
          />
          <TicTacToeSquare
            position={"TOP_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.TOP_RIGHT}
          />
        </div>
        <div>
          <TicTacToeSquare
            position={"MID_LEFT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MID_LEFT}
          />
          <TicTacToeSquare
            position={"MID_CENTER"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MID_CENTER}
          />
          <TicTacToeSquare
            position={"MID_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.MID_RIGHT}
          />
        </div>
        <div>
          <TicTacToeSquare
            position={"BOT_LEFT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOT_LEFT}
          />
          <TicTacToeSquare
            position={"BOT_CENTER"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOT_CENTER}
          />
          <TicTacToeSquare
            position={"BOT_RIGHT"}
            onSquareClick={this.props.onSquareClick}
            mark={this.props.tictacboard.BOT_RIGHT}
          />
        </div>
      </div>
    )
  }
}

export default TicTacToeBoard
