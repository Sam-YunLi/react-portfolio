import React from 'react'
import './footer.css'
import { AiOutlineGithub } from 'react-icons/ai'
import { GrLinkedin } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Yun Li</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/"><AiOutlineGithub /></a>
        <a href="https://github.com/"><GrLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Yun Li. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer