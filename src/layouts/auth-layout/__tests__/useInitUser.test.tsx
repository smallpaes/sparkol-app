import { describe, expect, test, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import useInitUser from '../hooks/useInitUser';
import { UserContext } from '../../../context/UserContext';
import { IDefaultUser, User } from '../../../types/user';

const fakeUser: User = {
  name: 'name',
  id: 1,
  token: 'token',
};

describe('useInitUser', () => {
  test('should return initUser function when being called', async () => {
    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const { result } = renderHook(() => useInitUser(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={userContextProps}>
          {children}
        </UserContext.Provider>
      ),
    });

    expect(result.current).toBeInstanceOf(Function);
  });

  test('should call setUser method when the returned initUser function is being called with user data', async () => {
    const spySetUser = vi.fn();
    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: spySetUser,
    };
    const { result } = renderHook(() => useInitUser(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={userContextProps}>
          {children}
        </UserContext.Provider>
      ),
    });

    act(() => {
      result.current(fakeUser);
    });
    expect(spySetUser).toHaveBeenCalled();
    expect(spySetUser).toHaveBeenCalledWith(fakeUser);
  });
});
