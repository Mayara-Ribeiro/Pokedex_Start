import React, { useState} from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";




const ModalDetails = (props) => {
  
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <p>PIKACHU</p>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body">
                    <div></div>
                    <p>PESO</p>
                </div>
            </Modal.Body>           
        </Modal>
    )
}

export default ModalDetails;