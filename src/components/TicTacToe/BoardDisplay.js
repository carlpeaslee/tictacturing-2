import React from 'react'
import styles from '../../styles'

const BoardDisplay = () => (
  <div className={'board'} style={styles.board}>
    <div style={styles.lines}>
      <div className={'verticalLine'} style={styles.verticalLine}></div>
      <div className={'verticalLine'} style={styles.verticalLine}></div>
    </div>
    <div style={styles.lines}>
      <div className={'horizontalLine'} style={styles.horizontalLine}></div>
      <div className={'horizontalLine'} style={styles.horizontalLine}></div>
    </div>
  </div>
)

export default BoardDisplay
