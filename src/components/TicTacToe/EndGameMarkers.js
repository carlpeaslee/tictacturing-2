import React, {Component} from 'react'
import styles from '../../styles'

class EndGameMarkers extends Component {
  render () {
    return (
      <div className={'board'} style={styles.board}>
        {this.props.locationOfWin === 'TOP' ? <div className={'topWin'} style={styles.topWin}/> : null}
        {this.props.locationOfWin === 'MID' ? <div className={'midWin'} style={styles.midWin}/> : null}
        {this.props.locationOfWin === 'BOT' ? <div className={'botWin'} style={styles.botWin}/> : null}
        {this.props.locationOfWin === 'LEFT' ? <div className={'leftWin'} style={styles.leftWin}/> : null}
        {this.props.locationOfWin === 'CENTER' ? <div className={'centerWin'} style={styles.centerWin}/> : null}
        {this.props.locationOfWin === 'RIGHT' ? <div className={'rightWin'} style={styles.rightWin}/> : null}
        {this.props.locationOfWin === 'DIAGONAL_TOP_LEFT' ? <div className={'topLeftWin'} style={styles.topLeftWin}/> : null}
        {this.props.locationOfWin === 'DIAGONAL_BOTTOM_LEFT' ? <div className={'botLeftWin'} style={styles.botLeftWin}/> : null}
      </div>
    )
  }
}

export default EndGameMarkers
