import React from 'react';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Geration from '../pages/Geration';

import { Routes, Route } from 'react-router-dom';

const Rotas = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Category" element={<Category />} />
                <Route exact path="/Geration" element={<Geration />} />

            </Routes>
        </div>
    )
}


export default Rotas;