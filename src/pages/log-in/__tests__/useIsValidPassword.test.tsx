import { describe, expect, test } from 'vitest';
import { renderHook } from '@testing-library/react';

import useIsValidPassword from '../hooks/useIsValidPassword';
import { IFormData } from '../log-in.types';
import { LogInContext } from '../log-in.context';

describe('useIsValidPassword', () => {
  test('should return true if a valid password is provided', async () => {
    const formData: IFormData = {
      username: '',
      password: 'a',
      isPasswordTouched: true,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidPassword(), {
      wrapper: ({ children }) => (
        <LogInContext.Provider
          value={{
            formData,
            setFormData,
          }}
        >
          {children}
        </LogInContext.Provider>
      ),
    });
    expect(result.current).toBe(true);
  });

  test('should return false if an empty password is provided', async () => {
    const formData: IFormData = {
      username: '',
      password: '',
      isPasswordTouched: false,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidPassword(), {
      wrapper: ({ children }) => (
        <LogInContext.Provider
          value={{
            formData,
            setFormData,
          }}
        >
          {children}
        </LogInContext.Provider>
      ),
    });
    expect(result.current).toBe(false);
  });
});
