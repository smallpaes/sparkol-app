import { describe, expect, test, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import useUserAuthenticated from '../hooks/useUserAuthenticated';
import { UserContext } from '../../../context/UserContext';
import { IDefaultUser, LocalUser } from '../../../types/user';
import * as getLocalUser from '../../../utils/getLocalUser';
import * as getLocalToken from '../../../utils/getLocalToken';
import * as useInitUser from '../hooks/useInitUser';

const fakeLocalUser: LocalUser = {
  id: 1,
  name: 'name',
};

const fakeLocalToken = 'fakeLocalToken';

describe('useUserAuthenticated', () => {
  test('should return not authenticated if no token is stored in local storage', async () => {
    const spyGetLocalToken = vi
      .spyOn(getLocalToken, 'default')
      .mockReturnValue(null);

    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const { result } = renderHook(() => useUserAuthenticated(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={userContextProps}>
          {children}
        </UserContext.Provider>
      ),
    });
    expect(spyGetLocalToken).toHaveBeenCalled();
    expect(result.current.isAuthenticated).toBe(false);
  });

  test('should return not authenticated if no user data is stored in local storage', async () => {
    const spyGetLocalUser = vi
      .spyOn(getLocalUser, 'default')
      .mockReturnValue(null);

    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const { result } = renderHook(() => useUserAuthenticated(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={userContextProps}>
          {children}
        </UserContext.Provider>
      ),
    });
    expect(spyGetLocalUser).toHaveBeenCalled();
    expect(result.current.isAuthenticated).toBe(false);
  });

  test('should call initUser when token and user data are stored in local storage but user context is empty', async () => {
    const spyGetLocalUser = vi
      .spyOn(getLocalUser, 'default')
      .mockReturnValue(fakeLocalUser);
    const spyGetLocalToken = vi
      .spyOn(getLocalToken, 'default')
      .mockReturnValue(fakeLocalToken);
    const mockInitUser = vi.fn();
    const spyUseInitUser = vi
      .spyOn(useInitUser, 'default')
      .mockReturnValue(mockInitUser);

    const userContextProps: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    renderHook(() => useUserAuthenticated(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={userContextProps}>
          {children}
        </UserContext.Provider>
      ),
    });
    expect(spyGetLocalUser).toHaveBeenCalled();
    expect(spyGetLocalToken).toHaveBeenCalled();
    expect(spyUseInitUser).toHaveBeenCalled();
    expect(mockInitUser).toHaveBeenCalled();
    expect(mockInitUser).toHaveBeenCalledWith({
      ...fakeLocalUser,
      token: fakeLocalToken,
    });
  });
});
