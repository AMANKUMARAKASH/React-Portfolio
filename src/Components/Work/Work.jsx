import React, { useContext } from 'react';
import './Work.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {themeContext} from '../../Context';



const Work = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
     {/**left side */}
     <div className="awesome">
        <span style={{color: darkMode?'white': ''}}> Works for All these</span>
        <span> Brands & Clients</span>
        <span>In this Reactjs project, we will make an awesome responsive personal<br/> portfolio website step-by-step.<br/> We learn React hooks, modern CSS, swiper js, framer motion, and many more. For contact,<br/> we will use the Email js library.<br/> To make this site more functional and practical,<br/> we will implement dark and light mode with the useContext hook.</span>
       
        <button className="button s-button">Hire Me</button>
        
       
        <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/*right side*/}
      <div className='w-right'>
        <div className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={Upwork} alt=''/>
            </div>
            <div className='w-secCircle'>
                <img src={Fiverr} alt=''/>
            </div>
            <div className='w-secCircle'>
                <img src={Amazon} alt=''/>
            </div>
            <div className='w-secCircle'>
                <img src={Shopify} alt=''/>
            </div>
            <div className='w-secCircle'>
                <img src={Facebook} alt=''/>
            </div>
        </div>
        {/*background circles*/}
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>

      </div>

      
    
  )
}

export default Work
