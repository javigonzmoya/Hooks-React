import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [values, handleInputChange, reset] = useForm({ desciption: '' });

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

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
};
