import React from "react";
import Button from 'react-bootstrap/Button';
import ModalDetails from '../ModalDetails'
import './style.css'

function CardPokemon () {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
    <>
      <div
        onClick={() => setModalShow(true)}  
        className='botão'>
                  POKEMON      
      </div>
     

      <ModalDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    );
  }
  
export default CardPokemon;