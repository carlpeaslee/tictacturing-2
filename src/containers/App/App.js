import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {TicTacTuring} from '../TicTacTuring'
import {GitHubButton} from '../../components'

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={1} mdOffset={11}>
            <GitHubButton/>
          </Col>
        </Row>
        <TicTacTuring/>
      </Grid>
    )
  }
}

export default App
