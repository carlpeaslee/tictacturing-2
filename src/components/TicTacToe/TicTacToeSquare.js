import React, {Component, PropTypes} from 'react'
import styles from '../../styles'

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
        style={this.props.mark === 'EMPTY' ? {...styles.square, ...styles.white} : styles.square}
      >
        {this.props.mark}
      </div>
    )
  }
}

export default TicTacToeSquare
