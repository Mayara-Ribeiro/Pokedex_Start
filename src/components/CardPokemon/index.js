import React from "react";
import ModalDetails from '../ModalDetails'
import './style.css'
import pokemon from '../../assets/images/pokemon.png'
import Pagination from "../Pagination";

function CardPokemon (props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
 <div>    
  

    <> 

      <div
        onClick={() => setModalShow(true)}  
        className='card'>
                  <div className='image'>
                    <img src={pokemon} />
                  </div>      


                  <div className="nome"><h6>Pikachu</h6></div>
      </div>
      

      <ModalDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>     
    <div className="text"><Pagination/>
   </div>

</div>
    );
  }
  
export default CardPokemon;

