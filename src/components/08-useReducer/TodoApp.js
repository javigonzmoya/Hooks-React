import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';

import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [values, handleInputChange, reset] = useForm({ desciption: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.desciption.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: values.desciption,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  const handleRemove = (todoId) => {
    const action = {
      type: 'remove',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    };
    dispatch(action);
  };
  return (
    <div>
      <h1>TodoApp: ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({ id, desc, done }, i) => (
              <li key={id} className="list-group-item">
                <p
                  className={`${done ? 'complete' : ''} text-center`}
                  onClick={() => handleToggle(id)}
                >
                  {i + 1}.{desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(id)}
                >
                  borrar
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="desciption"
              className="form-control"
              placeholder="Hacer.."
              autoComplete="off"
              onChange={handleInputChange}
              value={values.desciption}
            />
            <div className="d-grid gap-2">
              <button className="btn btn-outline-primary mt-1 " type="submit">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
