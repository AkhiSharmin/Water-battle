import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoredCart, getStoreCart } from "../../utilites/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  // console.log(bottles);

  const [cart, setCart] = useState([]);

  //useEffect
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, bottles);

    const storedCart = [];

    for (const id of storedCartIds) {
      // console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    console.log("stored Cart", storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handelAddToCart = (bottle) => {
    // console.log("Bottle will be added to the cart", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    //save the bottle id in the  storage
    addToStoredCart(bottle.id);
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
