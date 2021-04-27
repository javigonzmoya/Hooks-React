import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    //para resetear estodo y ver loading
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          //proteger el error al desapecer componebte
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [url]);

  return state;
};
