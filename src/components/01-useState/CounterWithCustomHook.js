import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counterApp.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(150);

  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        {' '}
        + 1{' '}
      </button>
      <button className="btn btn-primary" onClick={() => reset()}>
        {' '}
        RESET{' '}
      </button>
      <button className="btn btn-danger" onClick={() => decrement()}>
        {' '}
        - 1{' '}
      </button>
    </>
  );
};
