import React, {Component, PropTypes} from 'react'
import styles from '../../styles'
import store from '../../redux/store'

const xMark = require('./imgs/x.png')
const oMark = require('./imgs/o.png')
const emptyMark = require('./imgs/empty.png')

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
    const iconMark = () => {
      if (this.props.mark === 'X') {
        return (
          <img src={xMark} alt={'X'} style={styles.centeredImage}/>
        )
      }
      else if (this.props.mark === 'O') {
        return (
          <img src={oMark} alt={'O'} style={styles.centeredImage}/>
        )
      } else {
        return (
          <img src={emptyMark} alt={'empty'} style={styles.centeredImage}/>
        )
      }
    }

    const gameState = store.getState().gameState

    return (
      <div
        onClick={
          gameState === 'YOUR_TURN' && this.props.mark === 'EMPTY' ?
            () => handleSquareClick()
            :
            null
        }
        style={styles.square}
      >
        {iconMark()}
      </div>
    )
  }
}

export default TicTacToeSquare
