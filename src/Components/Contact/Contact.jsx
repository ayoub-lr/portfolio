import React, { useState } from 'react';
import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const [done , setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4eay5h4', 'template_rzfbs9n', form.current, 'nm_Nl0QUydZP_Hb8z')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
            setDone(true);
        });
    };


  return (
    <div className='contact-form' id='Contact'>

        <div className="w-left">
            <div className="awsome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background : '#ABF1FF94' }}></div>
            </div>
        </div>

        <div className='c-right'>
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea  name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button" />
            <span>{done && "Error to send !"}  </span>

            <div className='blur c-blur1' style={{background: 'var(--purple)'}} ></div>
         </form>

        </div>


    </div>
  )
}

export default Contact