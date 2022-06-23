import React from 'react'
import './portfolio.css'
import Pro1 from '../../assets/pro1.png'
import Pro2 from '../../assets/pro2.jpeg'
import Pro3 from '../../assets/pro3.jpeg'


const data = [
  {
    id: 1,
    image: Pro1,
    title: "Tiny Hero",
    subtitle: "Terminal Application game",
    github: "https://github.com/sam-lee-py/Terminal_Application",
    website: "https://github.com/sam-lee-py/Terminal_Application"
  },
  {
    id: 2,
    image: Pro2,
    title: "Tiny Game Store",
    subtitle: "Two-sided Marketpalce Website",
    github: "https://github.com/sam-lee-py/T2A2_APP",
    website: "https://tiny-game-store.herokuapp.com/"
  },
  {
    id: 3,
    image: Pro3,
    title: "Hack RIP Bigrock",
    subtitle: "2 days group hackthone for API",
    github: "https://github.com/sam-lee-py/hackripbigrock",
    website: "https://chipper-mochi-2d2836.netlify.app"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,subtitle,github,website}) => {
            return (
              <article key = {id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt="Tiny Hero" />
              </div>
              <h3>{title}</h3>
              <small className="text-light">{subtitle}</small>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">Github</a>
                <a href={website} className="btn btn-primary" target="_blank" rel="noreferrer">Website</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio