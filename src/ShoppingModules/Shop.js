import React, { useContext } from 'react'
import {ShopContext} from '../components/ShopContext'

const Shop = () => {
    const {products} = useContext(ShopContext);
  return (
    <div className="shop-container">
      <nav className="shop-two">
        <span>Home</span> &gt; <span>All Products</span>
      </nav>
      <div className="shop-layout">
        <aside className="sidebar">
          <h3>Browse by</h3>
          <hr />
          <ul>
            <li className="active">All Products</li>
            <li>Best Sellers</li>
            <li>Computers</li>
            <li>Drones & Cameras</li>
            <li>Headphones</li>
            <li>Home Page Best Sellers</li>
            <li>Home Page Sale</li>
            <li>Mobile</li>
            <li>Sale</li>
            <li>Speakers</li>
            <li>Tablets</li>
            <li>TV & Home Cinema</li>
            <li>Wearable Tech</li>
          </ul>
        </aside>
        <section className="product-section">
        <h1 className="shop-title">All Products</h1>
          <div className="products-header">
            <span>{products.length} products</span>
            <select className="sort-dropdown">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="product-grid gap-1">
          {products.map((product) => (
            <a href="#1" key={product.id} style={{ textDecoration: "none" }}>
              <div className="card position-relative p-2" style={{ width: "18rem", backgroundColor: "#E8E8E8", border: "none" }}>
                {product.Sale && (
                  <span className="position-absolute top-0 start-0 m-2 px-3 py-1 rounded-4 bg-danger text-white" style={{ zIndex: 10 }}>SALE</span>)}
                  <img src={product.img} className="card-img-top zoom-effect" alt={product.ProductName} />
                  <div className="card-body">
                    <p className="card-text text-black">{product.Name}</p>
                    <p>{product.Discount && (
                      <span className="text-decoration-line-through me-2 card-tex" style={{ fontSize: "24px" }}>{product.Price}</span>)}
                      <span className="card-tex" style={{ fontSize: "24px" }}>{product.Discount ? product.Discount : product.Price}</span>
                    </p>
                  </div>
              </div>
            </a>
          ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Shop