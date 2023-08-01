import React from 'react';
import './Heroimg.css';
import Introimg from "../assests/laptop-2557571.jpg"
import { Link } from 'react-router-dom';
import { FaFileDownload} from "react-icons/fa";
import resume from '../assests/priyanka resume pdf.pdf'
const Heroimg = () => {


  return (
    <div className='hero'>
    <div className='mask'>
    <img className='into-img' src={Introimg} alt="Introimg"/>
    </div>
    <div className='content'>
    <p>HI,I'M A FRONTEND</p>
    <h1>REACT DEVELOPER</h1>
    <p><a href={resume} download>Resume Download <FaFileDownload size={30}/></a></p>
    <br/><br/>
    <div>
    <Link to='/project' className='btn'>Projects</Link>
    <Link to='/contact' className='btn btn-light'>Contact</Link>
    </div>
    </div>
      
    </div>
  )
}

export default Heroimg;
