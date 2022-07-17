import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uik67je', 'template_7mofz55', form.current, '4Yy_22ij8v-VUovWV')
    e.target.reset();
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>krauskarol7@gmail.com</h5>
            <a href="mailto:krauskarol7@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>kraauzer</h5>
            <a href="https://m.me/kraauzer" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+48 791 773 420</h5>
            <a href="https://api.whatsapp.com/send?phone=+48791773420" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="email" name='email' placeholder='Your e-mail' required/>
          <textarea name="message" id=""rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
