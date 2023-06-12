import { expect, test, describe, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import useLogOut from '../useLogOut';
import { UserContext } from '../../context/UserContext';
import { IDefaultUser } from '../../types/user';

describe('useLogOut', () => {
  test('should return a logOut function', () => {
    const mockUser: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const { result } = renderHook(() => useLogOut(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={mockUser}>{children}</UserContext.Provider>
      ),
    });
    expect(result.current).toBeInstanceOf(Function);
  });

  test('should call clearUser when the return function is called', async () => {
    const mockClearUser = vi.fn();
    const mockUser: IDefaultUser = {
      user: null,
      clearUser: mockClearUser,
      setUser: () => undefined,
    };
    const { result } = renderHook(() => useLogOut(), {
      wrapper: ({ children }) => (
        <UserContext.Provider value={mockUser}>{children}</UserContext.Provider>
      ),
    });
    await result.current();
    expect(mockClearUser).toHaveBeenCalled();
  });
});
