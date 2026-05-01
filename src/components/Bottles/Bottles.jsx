import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  // console.log(bottles);

  const [cart, setCart] = useState([]);

  const handelAddToCart = (bottle) => {
    // console.log("Bottle will be added to the cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h2>All Bottles: {bottles.length}</h2>
      <p>Added To Cart: {cart.length}</p>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handelAddToCart={handelAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
