import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header_social">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank"><FaGithubSquare /></a>
      <a href="https://dribble.com" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials