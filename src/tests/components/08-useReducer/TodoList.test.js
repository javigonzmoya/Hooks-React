import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoList/>', () => {
  const handleRemove = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleRemove={handleRemove}
      handleToggle={handleToggle}
    />
  );

  test('debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener dos <TodoListItem/> ', () => {
    const elemntos = wrapper.find('TodoListItem');
    expect(elemntos.length).toBe(demoTodos.length);
    expect(elemntos.at(0).prop('handleToggle')).toEqual(expect.any(Function));
    expect(elemntos.at(0).prop('handleRemove')).toEqual(expect.any(Function));
  });
});
