import React from 'react';
import './style.css';
import Grama from '../../assets/images/Grama.png'


const Footer = () => {
    return (
      <div className='footer'>
        
        <img src={Grama} className='grama1'/>
           <img src={Grama} className='grama2'/>
           <img src={Grama} className='grama3'/>
      </div>
    );
}

export default Footer;