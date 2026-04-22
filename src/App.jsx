import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlesPromise = fetch("./../public/bottles.json").then((res) =>
  res.json()
);

function App() {
  // const bottles = [
  //   { id: 1, name: "Pink Nike Bottle", price: 250, color: "pink" },
  //   { id: 1, name: "Blue Nike Bottle", price: 250, color: "Blue" },
  //   { id: 1, name: "Red Nike Bottle", price: 250, color: "Red" },
  //   { id: 1, name: "Black Nike Bottle", price: 250, color: "Black" },
  // ];

  return (
    <>
      <h2>By Water Battle</h2>
      <Suspense fallback={<h3>Bottles are Loading....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
