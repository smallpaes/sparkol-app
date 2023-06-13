import { describe, expect, test, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import useLogin from '../hooks/useLogin';
import * as usePostData from '../../../hooks/usePostData';
import * as useIsValidForm from '../hooks/useIsValidForm';
import { UserContext } from '../../../context/UserContext';
import { IDefaultUser } from '../../../types/user';
import { LogInResponse } from '../log-in.types';

const logInSuccessResponseData: LogInResponse = {
  user: {
    id: 1,
    name: 'name',
  },
  token: 'token',
};

vi.mock('reactRouterDom');

describe('useLogin', () => {
  test('should return default isLoading state before login method is called', async () => {
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: () => Promise.resolve(null),
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(spyPostData).toHaveBeenCalled();
    expect(result.current.isLoading).toBe(false);
  });

  test('should return default error state before login method is called', async () => {
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: () => Promise.resolve(null),
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(spyPostData).toHaveBeenCalled();
    expect(result.current.error).toBeNull();
  });

  test('should return a login function before it can be called', async () => {
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: () => Promise.resolve(null),
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });
    expect(spyPostData).toHaveBeenCalled();
    expect(result.current.login).toBeInstanceOf(Function);
  });

  test('should not post data if the form is invalid', async () => {
    const spyUseIsValidForm = vi
      .spyOn(useIsValidForm, 'default')
      .mockReturnValue(false);
    const postData = vi.fn();
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: postData,
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });

    act(() => {
      result.current.login();
    });

    expect(spyPostData).toHaveBeenCalled();
    expect(postData).not.toHaveBeenCalled();
    expect(spyUseIsValidForm).toHaveBeenCalled();
  });

  test('should call postData when login is called and the form is valid', async () => {
    const spyUseIsValidForm = vi
      .spyOn(useIsValidForm, 'default')
      .mockReturnValue(true);
    const postData = vi.fn();
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: postData,
    });

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    });

    act(() => {
      result.current.login();
    });

    expect(spyPostData).toHaveBeenCalled();
    expect(postData).toHaveBeenCalled();
    expect(spyUseIsValidForm).toHaveBeenCalled();
  });

  test('should not call setUser if return value from postData is null', async () => {
    const spyUseIsValidForm = vi
      .spyOn(useIsValidForm, 'default')
      .mockReturnValue(true);
    const postData = vi.fn().mockReturnValue(null);
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: postData,
    });

    const setUser = vi.fn();

    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: setUser,
    };

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <UserContext.Provider value={userContextProps}>
            {children}
          </UserContext.Provider>
        </BrowserRouter>
      ),
    });

    await act(async () => {
      await result.current.login();
    });

    expect(spyPostData).toHaveBeenCalled();
    expect(postData).toHaveBeenCalled();
    expect(spyUseIsValidForm).toHaveBeenCalled();
    expect(setUser).not.toHaveBeenCalled();
  });

  test('should call setUser if return value from postData is not null', async () => {
    const spyUseIsValidForm = vi
      .spyOn(useIsValidForm, 'default')
      .mockReturnValue(true);
    const postData = vi.fn().mockReturnValue(logInSuccessResponseData);
    const spyPostData = vi.spyOn(usePostData, 'default').mockReturnValue({
      isLoading: false,
      error: null,
      postData: postData,
    });

    const setUser = vi.fn();

    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: setUser,
    };

    const { result } = renderHook(() => useLogin(), {
      wrapper: ({ children }) => (
        <BrowserRouter>
          <UserContext.Provider value={userContextProps}>
            {children}
          </UserContext.Provider>
        </BrowserRouter>
      ),
    });

    await act(async () => {
      await result.current.login();
    });

    expect(spyPostData).toHaveBeenCalled();
    expect(postData).toHaveBeenCalled();
    expect(spyUseIsValidForm).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalled();
    expect(setUser).toHaveBeenCalledWith({
      ...logInSuccessResponseData.user,
      token: logInSuccessResponseData.token,
    });
  });
});
