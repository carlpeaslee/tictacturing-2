import React, {Component} from 'react'

class TicTacToeSquare extends Component {
  render(){
    const handleSquareClick = (position) => {
      this.props.onSquareClick(position)
    }
    return (
      <div
        onClick={() => handleSquareClick(this.props.position)}
      >
        Square
      </div>
    )
  }
}

export default TicTacToeSquare
