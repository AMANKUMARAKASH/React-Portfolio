import React, { useContext, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react";
import {themeContext} from '../../Context';


const Contact = () => {
    const form = useRef();
    const [done,setDone]= useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_narg4w9', 'template_4nvgbfw', form.current, 'UzEkCN0dwHjIFYW85')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className='contact-form' id='Contact'>
    <div className='w-left'>
        <div className='awesome'>
            <span style={{color: darkMode?'white': ''}}> Get in touch</span>
            <span> Contact me</span>
            <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
        </div>
    </div>
     {/* right side form */}
     <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
