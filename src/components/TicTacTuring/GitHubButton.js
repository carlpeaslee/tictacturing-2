import React from 'react'
import s from './TicTacTuring.css'

const githubIcon = require('./imgs/githubicon.png')

function GitHubButton () {
  return (
    <button
      className={s.githubButton}
      onClick={() => {window.open(
        'https://github.com/carlpeaslee/tictacturing',
        '_blank'
      )}}
    >
      <img src={githubIcon} alt="github icon"/>
    </button>
  )
}


export default GitHubButton
