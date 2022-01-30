import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div>
      <img
        src="https://i.imgur.com/XXHiGZB.jpg"
        alt="header"
        className={style.modalbg}
      />
      <div className={style.container}>
      <h1>LET'S TALK!</h1>
      <p>We will get back to you within one to two days through email. Also please don't forget to check your spam account just in case!</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <TextField
            label="Name"
            name="name"
            required
            id="name"
            variant="standard"
            className={style.inputs}
          

          />
        </div>
        <div>
          <TextField
            label="E-mail"
            name="email"
            required
            id="name"
            variant="standard"
            className={style.inputs}

          />
        </div>
        <div>
          <TextField
            multiline
            label="Message"
            id="message"
            required
            variant="standard"
            minRows={4}
            className={style.inputs}


          />
        </div>
        
        <Button type="submit" variant="contained" className={style.send}>SEND REQUEST</Button>
      </form></div>
    </div>
  );
};

export default ContactForm;
