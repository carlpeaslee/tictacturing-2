const styles = {
  gitHubBar: {
    top: 0
  },
  board: {
    height: '52vh',
    width: '51vh',
    left: 0,
    right: 0,
    margin: 'auto',
    overflow: 'hidden',
    position: 'absolute',
    top: '10em'
  },
  lines: {
    position: 'absolute'
  },
  leftVerticalLine: {
    position: 'absolute',
    left: '16.5vh',
    height: '52vh',
    width: '1vh',
    background: '#8A8A8A',
    zIndex: '2'
  },
  rightVerticalLine: {
    position: 'absolute',
    left: '33.5vh',
    height: '52vh',
    width: '1vh',
    background: '#8A8A8A',
    zIndex: '2'
  },
  topHorizontalLine: {
    position: 'absolute',
    height: '1vh',
    width: '52vh',
    top: '16.5vh',
    background: '#8A8A8A',
    zIndex: '2'
  },
  botHorizontalLine: {
    position: 'absolute',
    height: '1vh',
    width: '52vh',
    top: '34vh',
    background: '#8A8A8A',
    zIndex: '2'
  },
  githubButton: {
    background: 'white',
    color: 'black',
    border: 'none'
  },
  square: {
    height: '16vh',
    width: '16vh',
    display: 'inline-block',
    margin: '.5vh',
    position: 'relative',
  },
  centeredImage: {
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  alertBar: {
    basic: {
      left: 0,
      right: 0,
      margin: 'auto',
      position: 'absolute',
      width: '50%',
      textAlign: 'center',
      top: '2em'
    }
  },
  modalButton: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'relative',
    display: 'block',
    top: '30vh',
    margin: 'auto'
  },
  topWin: {
    position: 'absolute',
    height: '1vh',
    width: '52vh',
    top: '8.25vh',
    background: 'red',
    zIndex: '3'
  },
  midWin: {
    position: 'absolute',
    height: '1vh',
    width: '52vh',
    top: '24.75vh',
    background: 'red',
    zIndex: '3'
  },
  botWin: {
    position: 'absolute',
    height: '1vh',
    width: '52vh',
    top: '41.25vh',
    background: 'red',
    zIndex: '3'
  },
  leftWin: {
    position: 'absolute',
    left: '8.25vh',
    height: '52vh',
    width: '1vh',
    background: 'red',
    zIndex: '3'
  },
  centerWin: {
    position: 'absolute',
    left: '24.75vh',
    height: '52vh',
    width: '1vh',
    background: 'red',
    zIndex: '3'
  },
  rightWin: {
    position: 'absolute',
    left: '41.25vh',
    height: '52vh',
    width: '1vh',
    background: 'red',
    zIndex: '3'
  },
  botLeftWin: {
    position: 'absolute',
    left: '23vh',
    height: '55vh',
    width: '1vh',
    background: 'red',
    zIndex: '3',
    WebkitTransform: 'rotate(45deg)'
  },
  topLeftWin: {
    position: 'absolute',
    left: '27vh',
    height: '55vh',
    width: '1vh',
    background: 'red',
    zIndex: '3',
    WebkitTransform: 'rotate(315deg)'
  },
  turingTest: {
    position: 'absolute',
    margin: 'auto',
    top: '30vh',
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: 'center'
  },
  turingButton: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'relative',
    margin: 'auto',
    paddingLeft: '3em',
    paddingRight: '3em'
  }
}

export default styles
