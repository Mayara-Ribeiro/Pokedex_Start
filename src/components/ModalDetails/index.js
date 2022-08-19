import React, { useState, useEffect } from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalDetails = (props) => {
    const [projectData, setProjectData] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    const idProject = props.projectid;


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
           
        </Modal>
    )
}

export default ModalDetails;