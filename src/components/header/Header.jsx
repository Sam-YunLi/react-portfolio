import React from 'react'
import './header.css'
import Pic from '../../assets/dog.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Yun Li</h1>
        <h5 className="text-light">Junior website developer</h5>

        <div className="pic">
          <img src={Pic} alt="Super Cool" className="img"/>
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header