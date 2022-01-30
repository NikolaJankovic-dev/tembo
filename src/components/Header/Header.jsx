import { Mail } from "@mui/icons-material";
import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from "./Header.module.css";
import ModalElem from "./ModalElem";

const Header = () => {
  Modal.setAppElement(document.getElementById("root"));
  let subtitle;
  const [buttonStyle, setButtonStyle] = useState(style.letstalkfirst);

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

  useEffect(() => {
    let bottomP =
      window.innerHeight - window.document.documentElement.scrollTop;
    const scrollDown = () => {
      if (window.scrollY < 300) {
        setButtonStyle(style.letstalkfirst);
      }
      if (window.scrollY > 300) {
        setButtonStyle(style.letstalksecond);
      }
      if (
        window.document.body.scrollHeight -
          window.innerHeight -
          window.scrollY <
        400
      ) {
        console.log(
          window.document.body.scrollHeight -
            window.innerHeight -
            window.scrollY
        );
        setButtonStyle(style.letstalkthird);
      }
    };
    window.addEventListener("scroll", scrollDown);
  }, []);

  return (
    <div className={style.header}>
      <img
        src="https://paperpillar.com/assets/images/hero-pattern-bg-lg.png"
        alt="header"
        className={style.background}
      />
      <img
        src="https://i.imgur.com/C0L5p5h.png"
        alt="wave"
        className={style.wave}
      />
      <div className={style.logoWrap}>
        <img
          src="https://i.imgur.com/01Cgnk0.png"
          alt="logo"
          className={style.logo}
        />
      </div>
      <div className={style.btnFloat}>
        <div className={style.btnWrap}>
          <button onClick={openModal} className={buttonStyle} id="btn">
            <Mail className={style.mail} />
            <span> LET'S TALK!</span>
          </button>
        </div>
      </div>
      <ModalElem modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Header;
