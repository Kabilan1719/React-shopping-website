import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";

const ProductDetails = () => {

  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false); // ✅ success message

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  const increase = () => setCount(prev => prev + 1);

  const decrease = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  // ✅ Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product, count);

    setAdded(true);     // show message
    setCount(1);        // reset quantity

    // hide message after 2 seconds
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <div className="row">

        {/* Image */}
        <div className="col-md-6">
          <img src={product.img} alt={product.Name} className="img-fluid" />
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h2>{product.Name}</h2>

          <p>
            {product.Discount && (
              <span className="text-decoration-line-through me-2">
                {product.Price}
              </span>
            )}
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              {product.Discount ? product.Discount : product.Price}
            </span>
          </p>

          {/* Quantity */}
          <div className="d-flex align-items-center gap-3 mt-3">
            <button className="btn btn-outline-dark" onClick={decrease}>-</button>
            <span>{count}</span>
            <button className="btn btn-outline-dark" onClick={increase}>+</button>
          </div>

          {/* Add to Cart */}
          <button 
            className="btn btn-dark mt-4 w-100"
            onClick={handleAddToCart}
          >
            Add {count} to Cart
          </button>

          {/* ✅ Success Message */}
          {added && (
            <p className="text-success mt-3">
              ✅ Added to cart successfully!
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;