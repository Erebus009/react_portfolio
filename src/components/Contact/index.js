import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="text-white container d-flex justify-content-center">
      <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <div className="mb-5">
         
          <input
            type="text"
            name="name"
            className="name-contact"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <label htmlFor="email">Email:</label>
        <div className="mb-5 mt-2">
         
          <input
            type="email"
            name="email"
            className="email-contact"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <label htmlFor="message">Message:</label>
        <div>
          
          <textarea
            name="message"
            rows="5"
            className="text-area"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn- btn-dark">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
