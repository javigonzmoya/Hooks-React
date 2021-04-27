import { shallow } from 'enzyme';
import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
  test('Debe mostarse correctamente ', () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    });
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostar la informacion', () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    });
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Javier',
          quote: 'Hola Paco',
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe('Hola Paco');
    expect(wrapper.find('.mb-1').text().trim()).toBe('Javier');
  });
});
