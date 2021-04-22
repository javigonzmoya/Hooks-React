import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  /*  const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  /*   useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [increment]); */

  return (
    <div>
      <h1>useCallBackHook</h1>
      <h3>{counter}</h3>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
