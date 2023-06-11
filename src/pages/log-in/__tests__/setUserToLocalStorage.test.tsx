import { expect, describe, test, vi, beforeEach } from 'vitest';

import setUserToLocalStorage from '../helpers/setUserToLocalStorage';
import { LocalUser } from '../../../types/user';
import LocalStorageKeys from '../../../constants/localStorageKeys';

const mockSetUserToLocalStorage = vi.fn();

describe('setTokenToLocalStorage', () => {
  beforeEach(() => {
    mockSetUserToLocalStorage.mockClear();
  });

  test('should call setDataToLocalStorage to save the user', () => {
    const user: LocalUser = {
      id: 1,
      name: 'name',
    };
    setUserToLocalStorage(user, mockSetUserToLocalStorage);
    expect(mockSetUserToLocalStorage).toHaveBeenCalledWith(
      LocalStorageKeys.USER,
      JSON.parse(JSON.stringify(user)),
    );
    expect(mockSetUserToLocalStorage).toHaveBeenCalledTimes(1);
  });

  test('should throw error if name is empty', () => {
    const user: LocalUser = {
      id: 1,
      name: '',
    };
    expect(() =>
      setUserToLocalStorage(user, mockSetUserToLocalStorage),
    ).toThrow('is empty');
  });

  test('should throw error if id is empty', () => {
    const user: LocalUser = {
      id: -1,
      name: '',
    };
    expect(() =>
      setUserToLocalStorage(user, mockSetUserToLocalStorage),
    ).toThrow('is empty');
  });

  test('should not call setDataToLocalStorage to save user data if the one of the values are empty', () => {
    const user: LocalUser = {
      id: -1,
      name: '',
    };
    expect(() =>
      setUserToLocalStorage(user, mockSetUserToLocalStorage),
    ).toThrow('is empty');
    expect(mockSetUserToLocalStorage).toHaveBeenCalledTimes(0);
  });
});
