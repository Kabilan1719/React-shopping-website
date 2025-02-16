import React from 'react'

const BestSellerCard = () => {
  return (
    <div className='seller-con'>
      <div className='container'>
        <div className='seller-text'>
            <h2>Best Sellers</h2>
        </div>
        <div className='seller-card gap-4'>
          <div className="card position-relative p-2" style={{ width: "18rem"}}>
            <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
            <img src="https://static.wixstatic.com/media/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png/v1/fill/w_361,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.png" className="card-img-top zoom-effect" alt="Product" />
            <div className="card-body">
              <p className="card-text text-black">JP - Space Tablet 10.4" Wi-Fi 32GB</p>
              <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
              <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
              </p>
            </div>
          </div>
          <div className="card position-relative p-2" style={{ width: "18rem"}}>
            <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
            <img src="https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_361,h_361,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png" className="card-img-top zoom-effect" alt="Product" />
            <div className="card-body">
              <p className="card-text text-black">Ocean Pro 11- 12.3" Touch Screen</p>
              <p><span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
              <span className="card-tex" style={{ fontSize: "24px" }}>$70.00</span>
              </p>
            </div>
          </div>
          <div className="card position-relative p-2" style={{ width: "18rem"}}>
            <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
            <div className="card-body">
              <p className="card-text text-black">Ocean Pro 11- 12.3" Touch Screen</p>
              <p><span className="me-2 card-tex" style={{ fontSize: "24px" }}>$85.00</span>
              </p>
            </div>
          </div>
          <div className="card position-relative p-2" style={{ width: "18rem"}}>
            <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white rounded" style={{ zIndex: 10 }}>SALE</span>
            <img src="https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_361,h_361,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg" className="card-img-top zoom-effect" alt="Product" />
            <div className="card-body">
              <p className="card-text text-black">Fitboot Inspire Fitness Tracker With Heart Rate Tracking</p>
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
  )
}

export default BestSellerCard