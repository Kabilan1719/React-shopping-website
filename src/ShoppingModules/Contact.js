import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='about-text'>
        <h1>Get in Touch</h1>
      </div>
      <hr />
      <div className="contact-details">
      <div className="contact-info">
        <h2>Opening Hours</h2>
        <p>Mon - Fri: 8am - 8pm</p>
        <p>Saturday: 9am - 7pm</p>
        <p>Sunday: 9am - 8pm</p>

        <h2>Store Location</h2>
        <p>500 Terry Francine Street</p>
        <p>San Francisco, CA 94158</p>
        <p>info@mysite.com</p>
        <p>123-456-7890</p>
      </div>
      <div className="contact-form">
      <h2 className="contact-title">We're here to help!</h2>
      <p className="contact-description">
        Fill out the form with any query on your mind, and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form-container">
        <div className="form-row">
          <div className="input-group1">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="input-group1">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="input-group1">
            <label htmlFor="email">Email *</label>
            <input type="email2" id="email" name="email2" required />
          </div>
          <div className="input-group1">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
          </div>
        </div>
        <div className="input-group1 message-box">
          <label htmlFor="message">Leave us a message...</label>
          <textarea id="message" name="message" />
        </div>
        <button type="submit" className="shop-btn8" id='btn'>Submit</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Contact