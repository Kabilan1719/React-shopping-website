import React from 'react'
const Footer = () => {
  return (
    <div className='foot-container'>
        <div className="helpcenter-container">
            <div className="help-text">
                <h2>Need Help? Check Out Our Help Center</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <button className="help-button">Go to Help Center</button>
            </div>
            <div className="help-image">
                <img src="https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1040,h_556,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg" alt="help"/>
            </div>
        </div>
        <div className='footer-box'>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Store Location</h3>
          <p>500 Terry Francine Street
          <br/>San Francisco, CA 94158
          <br/>info@mysite.com
          <br/>123-456-7890</p>
          <div className="social-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
          </div>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>Shop All</li>
            <li>Computers</li>
            <li>Tablets</li>
            <li>Drones & Cameras</li>
            <li>Audio</li>
            <li>Mobile</li>
            <li>TV & Home Cinema</li>
            <li>Wearable Tech</li>
            <li>Sale</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li>Shipping & Returns</li>
            <li>Terms & Conditions</li>
            <li>Payment Methods</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>We accept the following paying methods</p>
        <div className="payment-icons">
          <img src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_69,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Visa.png" alt="Visa" />
          <img src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-mastercard%403x.png" alt="MasterCard" />
          <img src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_69,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-amex%403x.png" alt="American Express" />
          <img src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-chinaunionpay%403x.png" alt="UnionPay" />
          <img src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_69,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/brand-jcb%403x.png" alt="JCB" />
          <img src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_65,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Diners.png" alt="Diners Club" />
          <img src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_69,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Discover.png" alt="Discover" />
          <img src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_69,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PayPal.png" alt="PayPal" />
        </div>
      </div>

      <div className="chat-icon">
        <i className="fa fa-comment"></i>
      </div>
    </footer>
        </div>
        <center><h6>© 2035 by TechShed. Powered and secured by Wix</h6></center>
    </div>
  )
}

export default Footer