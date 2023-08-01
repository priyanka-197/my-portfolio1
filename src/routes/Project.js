import React from 'react';
import Footer from '../component/Footer';
import Heroimg2 from '../component/Heroimg2';
import Navbar from '../component/Navbar';
import WorkCard from '../component/WorkCard';
import WorkCard2 from '../component/WorkCard2';
import WorkCard3 from '../component/WorkCard3';


const Project = () => {
  
  return (
    <div>
   <Navbar/>
   <Heroimg2 heading="PROJECTS." text="Here some of My Projects"/>
   <WorkCard/>
   <WorkCard2/>
   <WorkCard3/>
   <h1 style={{textAlign:'center'}}><a href='https://github.com/priyanka-197/my-js-projects'>see more projects-CLICK</a></h1>

   <Footer/>
    </div>
  )
}

export default Project
