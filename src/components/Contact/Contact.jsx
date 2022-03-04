import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  SERVICE_ID: "service_xxtb80u",
  TEMPLATE_ID: "template_po6w5pv",
  USER_ID: "cB3iZqowc016zQ2ob",
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, form.current, EMAIL_CONFIG.USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  const contactOptions = [
    {
      id: `contact-${Math.random()}`,
      name: "Email",
      description: "baranwal.rohan0@gmail.com",
      icon: <HiOutlineMail className='contact-option-icon' />,
      value: "mailto:baranwal.rohan0@gmail.com",
      message: "Send a message",
    },
    {
      id: `contact-${Math.random()}`,
      name: "LinkedIn",
      description: "",
      icon: <BsLinkedin className='contact-option-icon' />,
      value: "https://www.linkedin.com/in/rohan-baranwal/",
      message: "Send a message",
    },
  ];

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact-container'>
        <div className='contact-options'>
          {contactOptions.map((ci) => {
            return (
              <article className='contact-option' key={ci.id}>
                {ci.icon}
                <h4>{ci.name}</h4>
                <h5>{ci.description}</h5>
                <a href={ci.value} target='_blank' rel='noreferrer'>
                  {ci.message}
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' id='messageArea' rows='6' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
