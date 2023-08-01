import "./FooterStyle.css";
import React from 'react'
import { FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
    <div className="left">
    <div className="location">
    <FaHome size={20} style={{color:"#fff",marginRight:'2rem'}}/>
    <div>
    <p>Neer Nagar,Indore.</p>
    <p>India.</p>
    </div>
    </div>
    <div className="phone">
    <h4> <FaPhone size={20} style={{color:"#fff",marginRight:'2rem'}}/>
   <a href="tel:9131963520">9131963520</a></h4>
   </div>
   <div className="email">
   <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:'2rem'}}/>
   <a href="mailto:priyankaraghuwanshi583@gmail.com">priyankaraghuwanshi583@gmail.com</a>
 </h4>
  </div>

    </div>
    <div className="right">
    <h4>you can also contact me with </h4>
   
<div className="social">

<a href="https://instagram.com/pikuuu900?igshid=YmMyMTA2M2Y="><FaInstagram size={30} style={{color:"#fff",marginRight:'1rem'}}/></a>
<a href="https://www.linkedin.com/in/priyanka-raghuwanshi-frontend-developer-remote-30972025b"><FaLinkedin size={30} style={{color:"#fff",marginRight:'1rem'}}/></a>
<a href="https://github.com/priyanka-197"><FaGithub size={30} style={{color:"#fff",marginRight:'1rem'}}/></a>


</div>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
