import React, { useEffect, useState } from 'react';
import './effects.css';

export const Message = () => {
  const [coords, setCoors] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  const mouseMove = (e) => {
    const coors = { x: e.x, y: e.y };
    setCoors({
      ...coors,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove); //cuerpo
    return () => {
      window.removeEventListener('mousemove', mouseMove); //Limpieza
      console.log('componette desmontado');
    };
  }, []); //solo ejecuta por primera vez

  return (
    <div>
      <h3>
        X: {x} Y: {y}
      </h3>
    </div>
  );
};
