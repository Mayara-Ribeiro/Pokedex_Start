import React from 'react';
import Header from '../../components/Header'
import PokemonGeration from '../../pages/PokemonGeration'
import Footer from '../../components/Footer'
import './style.css'

const Geration = () => {
    return (
          <div className='geração'>
            <Header/>
            <PokemonGeration/>
            <Footer/>
          
          </div>


    )
}

export default Geration;