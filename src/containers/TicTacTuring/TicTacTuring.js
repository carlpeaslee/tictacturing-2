import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {makeTicTacMove} from '../../redux/actions'
import TicTacToeSquare from '../../components/TicTacToe/TicTacToeSquare'


class Board extends Component {
  render() {
    return (
      <Row>
        <Col md={4} mdOffset={4}>
          <Row>
            <Col md={4}>
              <TicTacToeSquare
                position={"TOP_LEFT"}
                onSquareClick={this.props.onSquareClick}
              />
            </Col>
            <Col md={4}>
              <TicTacToeSquare/>
            </Col>
            <Col md={4}>-</Col>
          </Row>
          <Row>
            <Col md={4}>-</Col>
            <Col md={4}>-</Col>
            <Col md={4}>-</Col>
          </Row>
          <Row>
            <Col md={4}>-</Col>
            <Col md={4}>-</Col>
            <Col md={4}>-</Col>
          </Row>
        </Col>
      </Row>
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
