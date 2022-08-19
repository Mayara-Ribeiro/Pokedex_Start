import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
import ModalDetails from '../ModalDetails';



const Modal= ({ data }) => {
    let [itemsToShowDevice, setItemsToShowDevice] = useState(3);
    const [modalShowData, setModalShowData] = useState(false);
    const [projectDataId, setProjectDataId] = useState('');

    const modalShow = (id) => {
        setProjectDataId(id);
        setModalShowData(true);
    }

    return (
        <div className='carousel-projects'>
         
            <div>
                {modalShowData &&
                    <ModalDetails
                        show={modalShowData}
                        projectid={projectDataId}
                        onHide={() => setModalShowData(false)} />
                }
            </div>
        </div>
    )
}

export default Modal;