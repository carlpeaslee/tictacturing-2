import React, {Component, PropTypes} from 'react'
import Radium from 'radium'

const styles = {
  square: {
    height: '16vw',
    width: '16vw',
    display: 'inline-block',
    margin: '.5vw',
    position: 'relative',
    textAlign: 'center',
    fontSize: '16vw',
    lineHeight: '16vw'
  },
  white: {
    color: 'white'
  }
}


class TicTacToeSquare extends Component {
  static propTypes = {
    position: PropTypes.string.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    mark: PropTypes.string.isRequired,
  }
  render(){
    const handleSquareClick = (position) => {
      this.props.onSquareClick(position)
    }
    return (
      <div
        onClick={() => handleSquareClick(this.props.position)}
        style={this.props.mark === '-' ? {...styles.square, ...styles.white} : styles.square}
      >
        {this.props.mark}
      </div>
    )
  }
}

TicTacToeSquare = Radium(TicTacToeSquare)

export default TicTacToeSquare
