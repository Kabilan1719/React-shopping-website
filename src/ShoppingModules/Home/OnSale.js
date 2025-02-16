import React from 'react'

const OnSale = () => {
  return (
    <div><div className='seller-con'>
    <div className='container'>
      <div className='seller-text'>
          <h2>On Sales</h2>
      </div>
      <div className='seller-card gap-4'>
        <div className="card position-relative p-2" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
          <img src="https://static.wixstatic.com/media/c22c23_396e7b1e80764edca161180595507710~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_396e7b1e80764edca161180595507710~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
          <div className="card-body">
            <p className="card-text text-black">Space Moon Smartwatch With Charger</p>
            <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
            <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
            </p>
          </div>
        </div>
        <div className="card position-relative p-2" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
          <img src="https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
          <div className="card-body">
            <p className="card-text text-black">OVE Light Space 5G, 128GB</p>
            <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
            <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
            </p>
          </div>
        </div>
        <div className="card position-relative p-2" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
          <img src="https://static.wixstatic.com/media/c22c23_c4329067853e4f94a57afc2a226bd5cf~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_c4329067853e4f94a57afc2a226bd5cf~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
          <div className="card-body">
            <p className="card-text text-black">Pilates 16" Touch Screen Laptop 24GB Memory</p>
            <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
            <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
            </p>
          </div>
        </div>
        <div className="card position-relative p-2" style={{ width: "18rem"}}>
          <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
          <img src="https://static.wixstatic.com/media/c22c23_75b7c7a737a0437f8998a42d8a345a85~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_75b7c7a737a0437f8998a42d8a345a85~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
          <div className="card-body">
            <p className="card-text text-black">Turn5 Portable Bluetooth Speaker</p>
            <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
            <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className='seller-button'>
        <button className="shop-btn3">View All</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default OnSale