import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Pokemons from '../../components/Pokemons';
import Footer from '../../components/Footer'

const Home = () => {

   
    return (
        <div className='home'>
            <Header />
            <Pokemons />
            <Footer />

        </div>
    );
}


export default Home;