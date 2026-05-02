import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToStoredCart, getStoreCart } from "../../utilites/localStorage";
import Cart from "../Cart/Cart";

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

  const handelRemoveToCart = (id) => {
    console.log("remove item from the cart", id);

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
  };

  return (
    <div>
      <h2>All Bottles: {bottles.length}</h2>
      <p>Added To Cart: {cart.length}</p>
      <Cart cart={cart} handelRemoveToCart={handelRemoveToCart}></Cart>
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
