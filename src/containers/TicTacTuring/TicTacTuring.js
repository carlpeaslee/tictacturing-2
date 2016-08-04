import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {makeTicTacMove} from '../../redux/actions'

class Board extends Component {
  render() {
    const handleSquareClick = (position) => {
      this.props.onSquareClick(Object.keys(position)[0])
    }
    return (
      <div>
        <Row>
          <Col md={2} mdOffset={4}
            onClick={() => handleSquareClick(this.refs)}
            ref={"TOP_LEFT"}
          >-</Col>
          <Col md={2}>-</Col>
          <Col md={2}>-</Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={4}>-</Col>
          <Col md={2}>-</Col>
          <Col md={2}>-</Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={4}>-</Col>
          <Col md={2}>-</Col>
          <Col md={2}>-</Col>
        </Row>
      </div>
    )
  }
}

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
