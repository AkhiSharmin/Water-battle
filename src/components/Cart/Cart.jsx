import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveToCart }) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} alt="" />
          <button onClick={() => handelRemoveToCart(bottle.id)}>
            <small>Remove</small>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
