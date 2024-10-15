import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/protfolio2.png';
import Portfolio3 from '../../assets/portfolio3.png';
import Portfolio4 from '../../assets/protfolio4.png';


const Works = () => {
  return (
    <section id='works'>
      <h2 className='workstitle'>My Portfolio</h2>
      <span className='npm '>
        I take pride in paying attention to the smallest details and making sure that my work is pixel-perfect.
        I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <div className='worksImgs'>
        <img src={Portfolio1} alt='' className='worksImg'/>
        <img src={Portfolio2} alt='' className='worksImg'/>
        <img src={Portfolio3} alt='' className='worksImg'/>
        <img src={Portfolio4} alt='' className='worksImg'/>
       
      </div>
      <button className='wordBtn'>See More</button>
    </section>
  );
}

export default Works;
