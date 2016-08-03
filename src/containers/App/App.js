import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {TicTacTuring} from '../TicTacTuring';

class App extends Component {
  render() {
    return (
      <Grid>
        <TicTacTuring/>
      </Grid>
    );
  }
}

export default App;
