import React from 'react'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h1>About TechShed</h1>
      </div>
      <hr />
      <div className='about-items'>
        <img src='https://static.wixstatic.com/media/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg/v1/fill/w_820,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg' alt='about'></img>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.<br/><br/>
        This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
      <hr />
      <div className='about-careers'>
        <h2>Careers</h2>
        <h6>Check out our job postings & opportunities waiting for you</h6>
      </div>
      <div className='form-cont'>
      <form className="job-application-form">
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" name="firstName" required />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input type="text" name="lastName" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email *</label>
          <input type="email1" name="email" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Position You Apply for</label>
          <select name="position">
            <option value=""></option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Product Manager">Product Manager</option>
          </select>
        </div>
        <div className="form-group">
          <label>Available Start Date *</label>
          <input type="date" name="startDate" required />
        </div>
      </div>

      <div className="form-group">
        <form>
        <label>Link to Resume</label>
        <input type="url" name="resumeLink" style={{width:'650px'}} />
        <button type="submit" className="shop-btn8">Submit</button>
        </form>
      </div>
    </form>

      </div>
    </div>
  )
}

export default About