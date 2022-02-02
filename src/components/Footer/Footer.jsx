import React, { useState } from "react";
import style from "./Footer.module.css";
import Modal from "react-modal";
import ModalElem from "../Header/ModalElem";

const Footer = () => {
  Modal.setAppElement(document.getElementById("root"));

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    window.document.body.style.overflow = "hidden";
    window.document.body.querySelectorAll("#btn")[0].style.display = "none";
  };
  const closeModal = () => {
    setIsOpen(false);
    window.document.body.style.overflowY = "visible";
    window.document.body.querySelectorAll("#btn")[0].style.display = "block";
  };
  return (
    <div className={style.footer}>
      <img
        src="https://paperpillar.com/assets/images/hero-pattern-bg-lg.png"
        alt="header"
        className={style.background}
      />{" "}
      {/* <img
        src="https://paperpillar.com/assets/images/footer-white-mask-lg.png"
        alt="wave"
        className={style.wave}
      /> */}
      <h1 className={style.travel}>Intrested in travel with us?</h1>
      <button onClick={openModal} className={style.footbtn} id="btn">
        <span> LET'S TALK!</span>
      </button>
      <ModalElem modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Footer;
