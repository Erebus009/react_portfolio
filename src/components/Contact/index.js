import React, {useRef, useState} from "react";
import "./style.css";
import emailjs from "emailjs-com"
import { FaPhone, FaMailBulk } from "react-icons/fa";

function Contact() {
  const formRef = useRef()
  const [done, setDone] = useState(false)




  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_awofmlu', 'template_d24lxjv', formRef.current,"user_uqCF5EtOomFjXyb4f0KZz")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setDone(true) 
      
       document.getElementById('form').reset()
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <div className="contact">
      <div className="contact-back"></div>
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">Get in Contact</h1>
            <div className="contact-info">
              <div className="contact-item">
                <p>
                  <FaPhone />
                  +1-386-801-6034
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <FaMailBulk />
                  travispuryear678@gmail.com
                </p>
              </div>
              <div className="contact-item">
                <p>
                 <a href="https://www.linkedin.com/in/travis-puryear/overlay/1635481507005/single-media-viewer/" target="
                 _blank">See my Resume</a>
                </p>
              </div>
            </div>
          </div>
         
          <div className='contact-right'>
           
         
         
          <form ref={formRef} onSubmit={handleSubmit} id="form">
            
            <input type="text" placeholder="Name" name="user_name" required/>
            <input type="text" placeholder="Subject" name="user_subject" required/>
            <input type="email" placeholder="Email" name="user_email" required/>
            <textarea rows="5" placeholder="Your Message" name="message" required/>
            <button className="btn btn-dark">Submit </button>
            {done && <p className="thank">Thank you for your message!</p>}
          </form>
          
         
        </div>
    </div>
  </div>
  
  );
}

export default Contact;
