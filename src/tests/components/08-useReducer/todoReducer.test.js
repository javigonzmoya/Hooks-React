import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre todoReduce', () => {
  test('Debe de retornar el estado por defecto ', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('Debe de agregar un TODO ', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Mongo',
      done: false,
    };
    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: newTodo,
    });
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe de borrar un TODO ', () => {
    const state = todoReducer(demoTodos, {
      type: 'remove',
      payload: 2,
    });
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test('Debe de hacer toggle un TODO ', () => {
    const state = todoReducer(demoTodos, {
      type: 'toggle',
      payload: 1,
    });

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
