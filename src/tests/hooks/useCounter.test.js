import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Prueba sobre useCounter', () => {
  test('Debe retornar valores por defecto ', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Debe retornar valor pasado por argumento ', () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.counter).toBe(3);
  });

  test('Debe incrementar el counter en 1 ', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101); //Para accciones ssobre Hooks
  });

  test('Debe decrementar el counter en 1 ', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99); //Para accciones ssobre Hooks
  });

  test('Debe resetear el counter ', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100); //Para accciones ssobre Hooks
  });
});
