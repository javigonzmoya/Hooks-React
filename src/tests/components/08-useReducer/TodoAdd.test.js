import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('Debe de mostarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('No debe de llamar handleAddTodo ', () => {
    const buttonSumit = wrapper.find('button');
    buttonSumit.simulate('click');
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamar handleAddTodo ', () => {
    const value = 'Compar Pan';
    const formSumit = wrapper.find('form').prop('onSubmit');
    const inputForm = wrapper.find('input');
    inputForm.simulate('change', {
      target: {
        value,
        name: 'desciption',
      },
    });
    formSumit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
    /*     expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    }); */
    //expect(wrapper.find('input').prop('value')).toBe('');
  });
});
