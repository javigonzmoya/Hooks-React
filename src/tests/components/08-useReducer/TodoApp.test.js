import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(); //Hacemos un mock para simular localStorage
  test('debe de mostarse correctamente <TodoApp/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de agragar un TODO', () => {
    const wrapper = mount(<TodoApp />);
    const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');

    act(() => {
      handleAddTodo(demoTodos[0]);
      handleAddTodo(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: ( 2 )');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('Debe de borrrar un TODO', () => {
    const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');
    const handleRemove = wrapper.find('TodoList').prop('handleRemove');

    act(() => {
      handleAddTodo(demoTodos[1]);
      handleRemove(demoTodos[1].id);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: ( 0 )');
  });
});
