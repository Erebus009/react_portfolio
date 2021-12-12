import React from 'react';
import "./style.css"
import { FaPhone, FaMailBulk } from 'react-icons/fa';

function Contact() {
 

  return (
    <section className="container justify-content-center d-flex">
     <div className='contact-box text-white d-flex flex-column justify-content-center'>
       <div className='contactItem top'>
       <h1 className=''>Contact me</h1>
       </div>
       <div className='contactItem'><h1>Phone <FaPhone /></h1>
       <p>+1-386-801-6034</p>
    
       
       </div>
       <div className='contactItem'><h1>Email <FaMailBulk /></h1>
       <p>travispuryear678@gmail.com</p>
       
       </div>
     </div>
    </section>
  );
}

export default Contact;
