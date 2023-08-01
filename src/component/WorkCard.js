import "./WorkCardStyles.css"
import React from 'react'
import image from '../assests/movies-app.jpg'

export default function WorkCard() {

  return (
    <div className='work-container'>
    <h1 className='project-heading'>Project 1</h1>
    <div className='project-container'>
    <div className='project-card'>
    <img src={image}alt='movieapp'></img>
    <h2 className='project-title'>Movie-App</h2>
    <div className='pro-details'>
    <p>Designed and developed a movie app that allows users to browse and search for movie and view movie details.</p>
    <div className='pro-btns'>
    <a href='https://movie-app-clones.netlify.app/'className='btn'>View</a>
    <a href='https://github.com/priyanka-197/Movie-app'className='btn'>Source</a>
    </div>
    </div>

    </div>
    </div>
    
    </div>
  )
}
