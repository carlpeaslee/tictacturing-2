const styles = {
  gitHubBar: {
    position: 'absolute',
    top: 0
  },
  board: {
    height: '52vw',
    width: '51vw',
    left: '16.5vw',
    top: '0',
    overflow: 'hidden',
    position: 'absolute'
  },
  displayBoard: {
    height: '52vw',
    width: '51vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden'
  },
  lines: {
    position: 'absolute'
  },
  leftVerticalLine: {
    position: 'absolute',
    left: '16.5vw',
    height: '52vw',
    width: '1vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  rightVerticalLine: {
    position: 'absolute',
    left: '33.5vw',
    height: '52vw',
    width: '1vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  topHorizontalLine: {
    position: 'absolute',
    height: '1vw',
    width: '52vw',
    top: '16.5vw',
    background: '#8A8A8A',
    zIndex: '2'
  },
  botHorizontalLine: {
    position: 'absolute',
    height: '1vw',
    width: '52vw',
    top: '34vw',
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
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1em',
      marginBottom: '1em',
      fontSize: '2em',
      lineHeight: '2em',
      textAlign: 'center'
    }
  },
  modalButton: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'relative',
    display: 'block',
    top: '15vw',
    margin: 'auto'
  }
}

export default styles
