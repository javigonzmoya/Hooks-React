import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; //!!data para saber si vienenn datos

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-1">{author}</p>
          <footer className="blockquote-footer"> {quote}</footer>
        </blockquote>
      )}
      {!loading && (
        <button className="btn btn-primary" onClick={increment}>
          Siguiente
        </button>
      )}
      {!loading && (
        <button className="btn btn-primary" onClick={decrement}>
          Anterior
        </button>
      )}
    </div>
  );
};
