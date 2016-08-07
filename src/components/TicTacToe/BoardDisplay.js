import React from 'react'
import styles from '../../styles'

const BoardDisplay = () => (
  <div className={'displayBoard'} style={styles.board}>
      <div className={'leftVerticalLine'} style={styles.leftVerticalLine}></div>
      <div className={'rightVerticalLine'} style={styles.rightVerticalLine}></div>
      <div className={'topHorizontalLine'} style={styles.topHorizontalLine}></div>
      <div className={'botHorizontalLine'} style={styles.botHorizontalLine}></div>
  </div>
)

export default BoardDisplay
