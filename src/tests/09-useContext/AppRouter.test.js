import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Prueba sobre <AppRouter/>', () => {
  const user = {
    nombre: 'javier',
    email: 'javi@gmail.com',
  };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser: () => {},
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
  test('Debe de mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
