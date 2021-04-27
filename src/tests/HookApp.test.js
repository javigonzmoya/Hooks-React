import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Prueba de snapShoot de <HookApp/>', () => {
  test('Debe mostar el componente correctamente', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
