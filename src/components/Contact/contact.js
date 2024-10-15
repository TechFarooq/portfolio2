import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/Walmart_logo.png';
import Microsoft from '../../assets/microsoft-logo-02.jpeg';
import Facebook from '../../assets/Facebook-Logo.png';
import Adobe from '../../assets/adobe-logo-13.png';
import FacebookIcon from '../../assets/facebook.png';
import InstragramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bnn4l1q', 'template_jqfj24b', form.current, '__qSQ4TraqP_6mrP-')

.then((result) => {

console.log(result.text);

e.target.reset();

alert('Email Sent !');

}, (error) => {

console.log(error.text);

});

  };

  return (
    <section id='contactPage'>
        <div id='clients'>
          <h1 className='contactPageTitle'>My client</h1>
          <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes
          </p>
          <div className='clientImgs'>
            <img src={Walmart}alt=''className='clientImg'/>
            <img src={Microsoft}alt=''className='clientImg'/>
            <img src={Facebook}alt=''className='clientImg'/>
            <img src={Adobe}alt=''className='clientImg'/>
          </div>
        </div>
        <div className='contacts'>
          <h1 className='contactPageTitle'>Contact me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your name' name='from_name'/>
            <input type='email' className='email'placeholder='Your email' name='from_email'/>
            <textarea className='msg' name='message'rows='5'placeholder='Your Message'></textarea>
            <button type='submit'value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={FacebookIcon}alt='Facebook'className='link'/>
              <img src={TwitterIcon}alt='Twitter'className='link'/>
              <img src={YoutubeIcon}alt='Youtube'className='link'/>
              <img src={InstragramIcon}alt='Instagram'className='link'/>
              
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;