import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("app"));

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        textAlign: "center",
        transform: "translate(-50%, -50%)"
    }
};

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected Option"
        onRequestClose={props.closeOptionModal}
        style={customStyles}
    >
        <h1>Selected Option: {props.selectedOption}</h1>
        <button className="btn btn-primary shadow-sm font-weight-bold" onClick={props.closeOptionModal}>OK, thanks.</button>
    </Modal>
);

export default OptionModal;