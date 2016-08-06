import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {TicTacTuring} from '../TicTacTuring'
import {GitHubButton} from '../../components'
import Radium from 'radium'

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
// eslint-disable-next-line
App = Radium(App)

export default App
