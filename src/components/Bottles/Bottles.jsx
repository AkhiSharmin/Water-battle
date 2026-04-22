import React, { use } from "react";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  return (
    <div>
      <h2>All Bottles: {bottles.length}</h2>
    </div>
  );
};

export default Bottles;
