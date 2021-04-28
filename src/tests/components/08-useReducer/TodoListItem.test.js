import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoListItem/>', () => {
  //{ todo, index, handleRemove, handleToggle }
  const handleRemove = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleRemove={handleRemove}
      handleToggle={handleToggle}
    />
  );

  test('Debe de mostar el componente Correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamar la funcion de handleRemove ', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(handleRemove).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Debe de llamar la funcion de handleToggle ', () => {
    const button = wrapper.find('p');
    button.simulate('click');
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Debe de mostrar el texto correctamente ', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(`${1}.${demoTodos[0].desc}`);
    expect(p.props().className.trim()).toBe(`text-center`);
  });

  test('Debe de mostrar complete si lo esta ', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        index={0}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
      />
    );

    const p = wrapper.find('p');
    expect(p.props().className.trim()).toBe(`complete text-center`);
    expect(p.hasClass('complete')).toBe(true); //otra forma de hacerlo
  });
});
