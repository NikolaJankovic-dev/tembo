import React from "react";
import Modal from "react-modal";
import ContactForm from "./ContactForm";
import style from "./ModalElem.module.css";

const ModalElem = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        contentLabel="Example Modal"
        className={style.modal}
        overlayClassName={style.overlay}
        preventScroll={true}
      >
        <button onClick={props.closeModal} className={style.closebtn}>
          X
        </button>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default ModalElem;
