import React, { useEffect, useState } from 'react'
import img1 from '../../images/2.png'
import img2 from '../../images/3.png'
import img3 from '../../images/4.png'

const ShopNow = () => {
    const images = [img1, img2, img3];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((previmage) => {
          const curIndex = images.indexOf(previmage);
          const nextIndex = (curIndex +1) % images.length;
          return images[nextIndex];
        });
      }, 5000);
      return () => clearInterval(timer);
    }, []);

  return (
    <div className='img-slider' style={{backgroundImage: `url(${currentImage})`}}>
        <div className="content">
            <span className="badge">Best Prices</span>
            <h1>Incredible Prices on All Your Favorite Items</h1>
            <p>Get more for less on selected brands</p>
            <button className="shop-btn">Shop Now</button>
        </div>
    </div>
  )
}

export default ShopNow