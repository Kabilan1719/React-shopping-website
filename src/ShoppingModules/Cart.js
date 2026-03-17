import React, { useContext } from "react";
import { ShopContext } from "../components/ShopContext";

const Cart = () => {

  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container mt-5">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="d-flex justify-content-between mb-3">
            <div>
              <h5>{item.Name}</h5>
              <p>Qty: {item.qty}</p>
            </div>

            <button 
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <p>Total Items: {cart.reduce((acc, item) => acc + item.qty, 0)}</p>
      <button className="shop-btn">Proceed to Payment</button>
    </div>
  );
};

export default Cart;