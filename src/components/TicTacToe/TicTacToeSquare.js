import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import store from '../../redux/store'

class TicTacToeSquare extends Component {
  static propTypes = {
    position: PropTypes.string.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    mark: PropTypes.string.isRequired,
  }
  render(){
    const handleSquareClick = () => {
      let position = this.props.position
      let mark = store.getState().playerMark
      this.props.onSquareClick(position, mark)
    }
    return (
      <div
        onClick={
          store.getState().gameState === 'YOUR_TURN' ?
            () => handleSquareClick()
            :
            null
        }
        style={this.props.mark === 'EMPTY' ? {...styles.square, ...styles.white} : styles.square}
      >
        {this.props.mark}
      </div>
    )
  }
}

export default TicTacToeSquare
