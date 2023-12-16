import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
import { Slide } from "react-awesome-reveal";
import { FiMail } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

export const Contact = () => {
  const form = useRef(null);

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    alert("Thanks for sending a message. I'll reach you soon.");

    // Access the form element using form.current
    form.current.reset();
  };

  return (
 
        <form ref={form} onSubmit={sendEmail}>
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text" name="from_name" placeholder="Your Name..." required/>
          </div>
          <div className="email">
            <span>
              <MdAlternateEmail />
            </span>
            <input type="email" name="from_email" placeholder="Your Email..."required/>
          </div>
          <div className="message">
            <span className="messageIcon">
              <FiMail />
            </span>
            <textarea cols="30" rows="10" name="message"  placeholder="Message..." required />
          </div>
          <input type="submit" value="Send" className="button" />
        </form>
    
  );
};

