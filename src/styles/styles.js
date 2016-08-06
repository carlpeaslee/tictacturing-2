const styles = {
  board: {
    height: '52vw',
    width: '51vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    overflow: 'hidden'
  },
  lines: {
    position: 'absolute'
  },
  verticalLine: {
    position: 'relative',
    display: 'inline-block',
    left: '.5vw',
    marginLeft: '16vw',
    height: '52vw',
    width: '1vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  horizontalLine: {
    position: 'relative',
    display: 'inline-block',
    height: '1vw',
    width: '52vw',
    top: '1vw',
    marginTop: '15.5vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  githubButton: {
    background: 'white',
    color: 'black',
    border: 'none'
  },
  square: {
    height: '16vw',
    width: '16vw',
    display: 'inline-block',
    margin: '.5vw',
    position: 'relative',
    textAlign: 'center',
    fontSize: '16vw',
    lineHeight: '16vw'
  },
  white: {
    color: 'white'
  },
  alertBar: {
    basic: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1em',
      marginBottom: '1em',
      fontSize: '2em',
      lineHeight: '2em',
      textAlign: 'center'
    },
    WELCOME: {
      background: 'pink'
    },
    FINDING_OPPONENT: {
      background: 'teal'
    },
    YOUR_TURN: {
      background: 'green'
    },
    theirTurn: {

    },
    turingTest: {

    },
    limbo: {

    }
  }
}

export default styles
