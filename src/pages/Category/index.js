import React from 'react';
import Header from '../../components/Header'
import PokemonCategory from '../../components/PokemonCategory'
import Footer from '../../components/Footer'
import './style.css'

const Category = () => {
    return (
          <div className='categoria'>
            <Header/>
            <PokemonCategory/>
            <Footer/>
          
          </div>


    )
}

export default Category;