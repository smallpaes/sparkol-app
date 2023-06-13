import { describe, expect, test } from 'vitest';
import { renderHook } from '@testing-library/react';

import useIsValidUserName from '../hooks/useIsValidUserName';
import { IFormData } from '../log-in.types';
import { LogInContext } from '../log-in.context';

describe('useIsValidUserName', () => {
  test('should return true if a valid username is provided', async () => {
    const formData: IFormData = {
      username: 'a',
      password: '',
      isPasswordTouched: false,
      isUsernameTouched: true,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidUserName(), {
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

  test('should return false if an empty username is provided', async () => {
    const formData: IFormData = {
      username: '',
      password: '',
      isPasswordTouched: false,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidUserName(), {
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
