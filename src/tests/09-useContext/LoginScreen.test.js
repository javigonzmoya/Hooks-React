import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Pruebas sobre <LoginSceen/>', () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutarse correctamente setUser con al argumento esperado ', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Javier',
      email: 'javi@gmail.com',
    });
  });
});
