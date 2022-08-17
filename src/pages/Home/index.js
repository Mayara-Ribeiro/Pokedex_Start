import React from 'react';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import Pokemon from '../../components/Pokemons';




function Home() {
    return (
        <div><Header/>
        <Pokemon/>
        </div>
    );
}

export default Home;