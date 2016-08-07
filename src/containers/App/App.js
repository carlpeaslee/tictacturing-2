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
          <Col  lg={1} md={1} lgPush={11} mdPush={11} style={styles.gitHubBar}>
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
