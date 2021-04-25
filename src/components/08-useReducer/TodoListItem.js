import React from 'react';

export const TodoListItem = ({ todo, index, handleRemove, handleToggle }) => {
  const { id, desc, done } = todo;
  return (
    <li className="list-group-item">
      <p
        className={`${done ? 'complete' : ''} text-center`}
        onClick={() => handleToggle(id)}
      >
        {index + 1}.{desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleRemove(id)}>
        borrar
      </button>
    </li>
  );
};
