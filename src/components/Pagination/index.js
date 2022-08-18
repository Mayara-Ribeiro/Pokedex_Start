import React from 'react';
import iconDireita from '../../assets/images/iconDireita.png';
import iconEsquerda from '../../assets/images/iconEsquerda.png';
import './style.css';



const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (

        <div className='paginação'>
            <section className='pag-setas'>
                <button onClick={onLeftClick}>
                    <img src={iconEsquerda} className='esquerda' />
                </button>
            </section>
            <section>
                <button onClick={onRightClick}>
                    <img src={iconDireita} className='direita' />
                </button>
            </section>
        </div>
    )
}

export default Pagination