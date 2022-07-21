import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState('');

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
      {/* <font size='7'>TechOnTheNet</font> */}
      <p data-testid='counter'>{counter}</p>
      <button data-testid='decrement' onClick={decrementCounter}>
        -DEC
      </button>
      <input
        type='email'
        placeholder='Enter email'
        data-testid='email-input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email && !/\S+@\S+\.\S+/.test(email) && (
        <span className='error' data-testid='error-msg'>
          Please enter a valid email.
        </span>
      )}
    </>
  );
};

export default Counter;
