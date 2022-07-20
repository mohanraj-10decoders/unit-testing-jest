import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <button data-testid='increment' onClick={incrementCounter}>
        +INC
      </button>
      <p data-testid='counter'>{counter}</p>
      <button data-testid='decrement' onClick={decrementCounter}>
        -DEC
      </button>
    </>
  );
};

export default Counter;
