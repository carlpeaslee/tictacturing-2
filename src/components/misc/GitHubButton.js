import React, {Component} from 'react'
import styles from '../../styles'

const githubIcon = require('./githubicon.png')

class GitHubButton extends Component {
  render() {
    return (
      <button
        style={styles.githubButton}
        onClick={() => {window.open(
          'https://github.com/carlpeaslee/tictacturing',
          '_blank'
        )}}
      >
        <img src={githubIcon} alt="github icon"/>
      </button>
    )
  }
}


export default GitHubButton
