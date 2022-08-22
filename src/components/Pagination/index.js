import React from "react";
import './style.css'
import iconDireita from '../../assets/images/iconDireita.png'
import iconEsquerda from '../../assets/images/iconEsquerda.png'

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button onClick={onLeftClick} className="botões"><img src={iconEsquerda} className="icon"/></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick} className="botões"><img src={iconDireita} className="icon"/></button>
        </div>
    )
}

export default Pagination;