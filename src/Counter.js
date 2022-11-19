import React from "react";

const Counter = ({ count, setCount }) => {
  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="buttons">
        <button className="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
