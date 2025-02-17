import React from 'react'

const TodaySpecial = () => {
  return (
    <div className='today-spcl-card'>
        <img src='https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_1791,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png' alt='drone' />
        <div className='offer-content'>
            <span className='special-badge'>Today's Special</span>
            <h2>Best Aerial View in Town</h2>
            <h1><span className='discount'>30%</span> OFF</h1>
            <p>on professional camera drones</p>
            <h6>Limited quantities.<br/>See product detail pages for availability.</h6>
            <button className='shop-btn6'>Shop</button>
        </div>
    </div>
  )
}

export default TodaySpecial