import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas em useForm', () => {
  const initialForm = {
    name: 'javier',
    email: 'javo@gmail.com',
  };

  test('Debe regresar un form por defecto ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Debe cambiar el valor del formulario a name:Paco ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Paco',
        },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: 'Paco' });
  });

  test('Debe resetaear formulario ', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Paco',
        },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
