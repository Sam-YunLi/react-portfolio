import React from 'react'
import './experience.css'
import { BsBookmarks } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Here is what I got.</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">HTML</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>Css</h4>
                <small className="text-light">CSS</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">JavaScript</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Bootstrap</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">React</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>Ruby on Rails</h4>
                <small className="text-light">Ruby on Rails</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Node JS</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">MongoDB</small>
              </div>
            </article>

            <article className="experience_details">
              <BsBookmarks className="experience_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">PostgreSQL</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience