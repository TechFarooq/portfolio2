import React from 'react'
import './intro.css';
import bg from '../../assets/InShot_20240913_202800597.png';
import btnimg from '../../assets/checkmark-circle-2-outline.png';
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
       <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Umar</span><br />Website designer</span>
          <p className='introPara'>I am a skilled web designer with experince in creating <br /> visually appearing and user-friendly website</p>
           <Link><button className='btn'><img src={btnimg} alt='Hire me' className='btnImg'/>Hire me</button></Link>         
        </div> 
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;