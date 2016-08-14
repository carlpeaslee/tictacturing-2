import React, {Component, PropTypes} from 'react'
import s from './TicTacTuring.css'
import {Row, Col} from 'react-bootstrap'


function AsyncBar(props){
  return (
    <Row>
      <Col>
        <div className={s.asyncBar}>
          <h3>This is the async bar</h3>
          <button
            onClick={() => {
              console.log('clicked')
              props.dispatchFetchShit()
            }}
          >
            Do a sync stuff
          </button>
        </div>
      </Col>
    </Row>
  )
}

export default AsyncBar
