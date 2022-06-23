import React from 'react'
import './about.css'
import Pic from '../../assets/pic.jpeg'
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {RiFolderLine} from "react-icons/ri"
import Resume from '../../assets/resume.pdf'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Pic} alt=""/>
          </div>
        </div>

        <div className="about_content">
          {/* <div className="about_cards">
            <article className="about_card">
              <FiAward className='about_icon' />
              <h5>Clients</h5>
              <small>200+ Wordwide</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>

            <article className="about_card">
              <RiFolderLine className='about_icon' />
              <h5>Project</h5>
              <small>My Project</small>
            </article>
          </div>
           */}
          <p>
          An enthusiastic junior developer, who is eager to learn and adopt new coding technologies and skillsets. Aspires to establish a career in front-end to back-end application development.
          </p>

          <a href={Resume} download className="btn">Download resume</a>
        </div>
      </div>
    </section>
  )
}

export default About