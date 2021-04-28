import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef/>', () => {
  test('Debe mostrase correctamente', () => {
    const wrapper = shallow(<RealExampleRef />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('Debe mostrase el componente <MultipleCustomHooks/>', () => {
    const wrapper = shallow(<RealExampleRef />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
