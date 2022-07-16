import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'

const data = [
  {
    id:1,
    image:ME,
    title:'Tournament App',
    github:'https://github.com',
    demo:'https://github.com',
  },
  {
    id:2,
    image:ME,
    title:'Tournament App2',
    github:'https://github.com',
    demo:'https://github.com',
  },
  {
    id:3,
    image:ME,
    title:'Tournament App3',
    github:'https://github.com',
    demo:'https://github.com',
  },
  {
    id:4,
    image:ME,
    title:'Tournament App4',
    github:'https://github.com',
    demo:'https://github.com',
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {data.map(item => {
        return (
          <article key={item.id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <div className="portfolio__item-cta">
            <a href={item.github} className='btn' target='_blank'>Github</a>
            <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
        )
      })}
      </div>
    </section>
  )
}
