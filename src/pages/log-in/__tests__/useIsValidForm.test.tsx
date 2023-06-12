import { describe, expect, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import useIsValidForm from '../hooks/useIsValidForm';
import { IFormData } from '../log-in.types';
import { LogInContext } from '../log-in.context';

import * as useIsValidPassword from '../hooks/useIsValidPassword';
import * as useIsValidUserName from '../hooks/useIsValidUserName';

describe('useIsValidPassword', () => {
  test('should return true if password and username are valid', async () => {
    const spyIsValidUsername = vi
      .spyOn(useIsValidUserName, 'default')
      .mockReturnValue(true);
    const spyIsValidPassword = vi
      .spyOn(useIsValidPassword, 'default')
      .mockReturnValue(true);
    const formData: IFormData = {
      username: '',
      password: 'a',
      isPasswordTouched: true,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidForm(), {
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
    expect(spyIsValidUsername).toHaveBeenCalled();
    expect(spyIsValidPassword).toHaveBeenCalled();
    expect(result.current).toBe(true);
  });

  test('should return false if username is invalid', async () => {
    const spyIsValidUsername = vi
      .spyOn(useIsValidUserName, 'default')
      .mockReturnValue(false);
    const spyIsValidPassword = vi
      .spyOn(useIsValidPassword, 'default')
      .mockReturnValue(true);
    const formData: IFormData = {
      username: '',
      password: 'a',
      isPasswordTouched: true,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidForm(), {
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
    expect(spyIsValidUsername).toHaveBeenCalled();
    expect(spyIsValidPassword).toHaveBeenCalled();
    expect(result.current).toBe(false);
  });

  test('should return false if password is invalid', async () => {
    const spyIsValidUsername = vi
      .spyOn(useIsValidUserName, 'default')
      .mockReturnValue(true);
    const spyIsValidPassword = vi
      .spyOn(useIsValidPassword, 'default')
      .mockReturnValue(false);
    const formData: IFormData = {
      username: '',
      password: 'a',
      isPasswordTouched: true,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidForm(), {
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
    expect(spyIsValidUsername).toHaveBeenCalled();
    expect(spyIsValidPassword).toHaveBeenCalled();
    expect(result.current).toBe(false);
  });

  test('should return false if password and username are invalid', async () => {
    const spyIsValidUsername = vi
      .spyOn(useIsValidUserName, 'default')
      .mockReturnValue(false);
    const spyIsValidPassword = vi
      .spyOn(useIsValidPassword, 'default')
      .mockReturnValue(false);
    const formData: IFormData = {
      username: '',
      password: 'a',
      isPasswordTouched: true,
      isUsernameTouched: false,
    };
    const setFormData = () => undefined;
    const { result } = renderHook(() => useIsValidForm(), {
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
    expect(spyIsValidUsername).toHaveBeenCalled();
    expect(spyIsValidPassword).toHaveBeenCalled();
    expect(result.current).toBe(false);
  });
});
