import "./WorkCardStyles2.css"
import React from 'react'
import image from '../assests/tempature.jpg'

export default function WorkCard2() {

  return (
    <div className='work-container'>
    <h1 className='project-heading'>Project2</h1>
    <div className='project-container'>
    <div className='project-card'>
    <img src={image}alt='movieapp'></img>
    <h2 className='project-title'>Temperature-Converter</h2>
    <div className='pro-details'>
    <p>Designed and developed a responsive Temperature convertor using HTML,CSS and JAVA SCRIPT that convert celcius to fahrenheit and kelvin</p>
    <div className='pro-btns'>
    <a href='https://temprature-convertors.netlify.app/'className='btn'>View</a>
    <a href='https://github.com/priyanka-197/my-js-projects/tree/master/Temperature%20Converter'className='btn'>Source</a>
    </div>
    </div>

    </div>
    </div>
    
    </div>
  )
}