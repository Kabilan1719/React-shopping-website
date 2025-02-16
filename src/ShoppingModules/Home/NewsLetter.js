import React, { useState } from 'react'

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed with:", email, "Checkbox:", subscribed);
        alert("Subscription successful!");
    };
  return (
    <div className="newsletter-container">
      <h2>Newsletter</h2>
      <p>Sign up to receive updates on new arrivals and special offers</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label>Email *</label>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className='btn-news'>Subscribe</button>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribed}
            onChange={() => setSubscribed(!subscribed)}
          />
          <label htmlFor="subscribe">Yes, subscribe me to your newsletter.</label>
        </div>
      </form>
    </div>
  )
}

export default NewsLetter