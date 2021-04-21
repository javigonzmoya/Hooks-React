import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0]; //!!data para saber si vienenn datos

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-1">
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        Anterior
      </button>
    </div>
  );
};
