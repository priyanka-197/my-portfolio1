import "./WorkCardStyles2.css"
import React from 'react'
import image from '../assests/dictionary.jpg'

export default function WorkCard3() {

  return (
    <div className='work-container'>
    <h1 className='project-heading'>Project3</h1>
    <div className='project-container'>
    <div className='project-card'>
    <img src={image}alt='movieapp'></img>
    <h2 className='project-title'>English-Dictionary</h2>
    <div className='pro-details'>
    <p>Developed a English dictionary app using HTML CSS JAVA SCRIPT</p>
    <div className='pro-btns'>
    <a href='https://english-dictionarys.netlify.app/'className='btn'>View</a>
    <a href='https://github.com/priyanka-197/my-js-projects/tree/master/english%20Dictionary'className='btn'>Source</a>
    </div>
    </div>

    </div>
    </div>
    
    </div>
  )
}