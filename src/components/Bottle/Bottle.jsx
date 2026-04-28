import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { img, name, price, stock } = bottle;
  //   console.log(bottle);
  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Price: ${price}</p>
      <p>{stock} Remaining</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Bottle;
