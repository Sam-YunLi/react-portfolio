import React from 'react'
import './nav.css'
import {BiHomeAlt} from  'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageSquareMinus} from 'react-icons/bi'
import {MdWebAsset} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
      <a href="#about" onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWebAsset /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareMinus /></a>
    </nav>
  )
}

export default Nav