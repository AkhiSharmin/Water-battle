import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  // console.log(bottles);
  return (
    <div>
      <h2>All Bottles: {bottles.length}</h2>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
