import React from 'react'

const shopCard = () => {
  return (
    <div className='shopcard'>
      <div className='card3 card1'>
        <div className='card-content'>
          <h3>Holiday Deals</h3>
          <h1>Up to <br/> 30% off</h1>
          <p>Selected Smartphone Brands</p>
          <button className='shop-btn1'>Shop</button>
        </div>
      </div>
      <div className='card3 card2'>
        <div className='card-content'>
          <h3>Just In</h3>
          <h1>Take Your <br/> Sound Anywhere</h1>
          <p>Top Headphone Brands</p>
          <button className='shop-btn2'>Shop</button>
        </div>
      </div>
    </div>
  )
}

export default shopCard