import React, { useContext } from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// import Resume from './resume.pdf';
import {themeContext} from '../../Context';


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/**left side */}
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span> Services</span>
        <span>In this Reactjs project, we will make an awesome responsive personal portfolio website step-by-step.<br/> We learn React hooks, modern CSS, swiper js, framer motion, and many more. For contact,<br/> we will use the Email js library.<br/> To make this site more functional and practical, we will implement dark and light mode with the useContext hook.</span>
        <a href="https://drive.google.com/file/d/1IUPSYVpiMYWGDZi1bTTQuACtyB08jIMO/view?usp=drive_link" download>
        <button className="button s-button">Download CV</button>
        </a>
       
        <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/***right side */}
      <div className="cards">
       <div style={{left:'14rem'}}>
        <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
        />
       </div>
       <div style={{top:'12rem', left:'-4rem'}}>
        <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Lorem ispum dummy text are usually use in section where we need some random text"}
        />
       </div>
       <div style={{top:'19rem', left:'12rem'}}>
        <Card
             emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
        />
       </div>
       <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  );
};

export default Services;
