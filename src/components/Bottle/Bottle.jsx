import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handelAddToCart }) => {
  const { img, name, price, stock } = bottle;
  //   console.log(bottle);
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: ${price}</p>
      <p>{stock} Remaining</p>
      <button onClick={() => handelAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
