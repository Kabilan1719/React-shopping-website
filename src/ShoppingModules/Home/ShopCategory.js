import React from 'react';
import img1 from '../../images/7.jpeg';
import img2 from '../../images/8.jpeg';
import img3 from '../../images/9.jpeg';
import img4 from '../../images/10.jpeg';
import img5 from '../../images/11.jpeg';
import img6 from '../../images/12.jpeg';
import img7 from '../../images/13.jpeg';
import img8 from '../../images/14.jpeg';
import img9 from '../../images/15.jpeg';
import img10 from '../../images/16.jpeg';

const categories = [
  { img: img1, title: "Computers" },
  { img: img2, title: "Mobile" },
  { img: img3, title: "Drones & Cameras" },
  { img: img4, title: "Sale" },
  { img: img5, title: "Tablets" },
  { img: img6, title: "Best Sellers" },
  { img: img7, title: "T.V & Home Cinema" },
  { img: img8, title: "Wearable Tech" },
  { img: img9, title: "Speakers" },
  { img: img10, title: "Headphones" }
];

const ShopCategory = () => {
  return (
    <div className='category-con'>
      <div className='container'>
        <div className='category-text'>
          <h2>Shop by Category</h2>
        </div>
        <div className="categories d-flex justify-content-center flex-wrap gap-5">
          {categories.map((category, index) => (
            <div key={index} className="category-item text-center">
              <div className="round-card">
                <img src={category.img} alt={category.title} />
              </div>
              <h2 className="category-title">{category.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className='big-price-card'>
          <img src='https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_1791,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png' alt='computer'/>
          <div className="best-price-badge">Best <br/> Price</div>
          <div className="offer-container">
            <h3>Save up to</h3>
            <h1>$150</h1>
            <p>on selected laptop <br/>& tablets brands</p>
            <small>Terms and conditions apply</small>
            <button className="shop5-btn">Shop</button>
          </div>
      </div>
    </div>
  );
};

export default ShopCategory;
