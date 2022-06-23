import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YunLi', 'template_2xww3xh', form.current, 'wi82DOb9g2-Dusr_2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h6>sam.looong@gmail.com</h6>
            <a href="mailto:sam.looong@gmail.com">send email</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea name = "message" row="7" placeholder="Your message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact