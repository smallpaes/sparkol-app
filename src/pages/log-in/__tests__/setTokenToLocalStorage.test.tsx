import { expect, describe, test, vi, beforeEach } from 'vitest';

import setTokenToLocalStorage from '../helpers/setTokenToLocalStorage';
import LocalStorageKeys from '../../../constants/localStorageKeys';

const mockSetDataToLocalStorage = vi.fn();

describe('setTokenToLocalStorage', () => {
  beforeEach(() => {
    mockSetDataToLocalStorage.mockClear();
  });

  test('should call setDataToLocalStorage to save the token and data', () => {
    const tokenValue = 'tokenValue';
    setTokenToLocalStorage(tokenValue, mockSetDataToLocalStorage);
    expect(mockSetDataToLocalStorage).toHaveBeenCalledWith(
      LocalStorageKeys.TOKEN,
      tokenValue,
    );
    expect(mockSetDataToLocalStorage).toHaveBeenCalledTimes(1);
  });

  test('should throw error if token is empty', () => {
    const tokenValue = '';
    expect(() =>
      setTokenToLocalStorage(tokenValue, mockSetDataToLocalStorage),
    ).toThrow('is empty');
  });

  test('should not call setDataToLocalStorage to save the token and data if token us empty', () => {
    const tokenValue = '';
    expect(() =>
      setTokenToLocalStorage(tokenValue, mockSetDataToLocalStorage),
    ).toThrow('is empty');
    expect(mockSetDataToLocalStorage).toHaveBeenCalledTimes(0);
  });
});
