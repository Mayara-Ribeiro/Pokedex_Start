import React from 'react';
import './style.css';
import Grama from '../../assets/images/Grama.png'
import Github from '../../assets/images/Github.png'
import Linkedin from '../../assets/images/Linkedin.png'

const Footer = () => {
  return (

  <div className='footer'>
        <img src={Grama} className='grama1'/>
        <img src={Grama} className='grama2'/>
        <img src={Grama} className='grama3'/>


      <div className='info-footer'>
         <a href='https://www.linkedin.com/in/mayara-ribeiro-/' className='linkedin'><img src={Linkedin}/></a> 
         <a href='https://github.com/Mayara-Ribeiro' className='github'><img src={Github}/></a> 

        <h6 className='name'>Desenvolvido por Mayara Ribeiro</h6>
        <h6 className='curso' > START 2022 - Recife</h6>

      </div>


      </div>
  );
}

export default Footer;