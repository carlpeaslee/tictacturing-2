import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {TicTacTuring} from '../TicTacTuring'
import {GitHubButton} from '../../components'
import Radium from 'radium'
import styles from '../../styles'

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={1} mdOffset={11} style={styles.gitHubBar}>
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
