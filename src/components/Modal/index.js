import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
import ModalDetails from '../ModalDetails';



const Modal= () => {
  

    return (
        <div className='carousel-projects'>
         
            <div>
                {modalShowData &&
                    <ModalDetails
                      />
                }
            </div>
        </div>
    )
}

export default Modal;