import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-ux.png';
import WebDesign from '../../assets/ux.png';
import AppDesign from '../../assets/developer.png';
function skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What i do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experiance in creating visually appearing and user-friendly website.I have a strong understanding of design and keen eye for detai.I am proficient in HTML,CSS and JavaScript,as well as design software such as Adobe Photoshop and illustrator</span>
          <div className='skillBars'>
             <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Skilled in creating user-centered designs that blend aesthetic appeal with functionality. Proficient in wireframing, prototyping, and front-end development, with a focus on delivering seamless user experiences across web and mobile platforms.</p>
                </div>
             </div>
             <div className='skillBar'>
                <img src={WebDesign} alt='WEbDesign'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Experienced in designing visually appealing and highly functional websites with a focus on user experience and responsive design.</p>
                </div>
             </div>
             <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign'className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Specialized in designing user-friendly, intuitive mobile and web applications with a focus on clean aesthetics and optimal functionality. </p>
                </div>
             </div>
          </div>
           
    </section>
  )
}

export default skills