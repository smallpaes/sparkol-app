import { expect, describe, test } from 'vitest';

import setDataToLocalStorage from '../helpers/setDataToLocalStorage';

describe('setDataToLocalStorage', () => {
  test('should set data to local storage correctly', () => {
    const key = 'key';
    const value = 'value';
    setDataToLocalStorage(key, value);
    const storedValue = JSON.parse(localStorage.getItem(key) as string);
    expect(storedValue).toBe(value);
  });

  test('should throw an error if key is not provided', () => {
    const key = '';
    const value = 'value';
    expect(() => setDataToLocalStorage(key, value)).toThrow('is empty');
  });

  test('should throw an error if value is not provided', () => {
    const key = 'key';
    const value = '';
    expect(() => setDataToLocalStorage(key, value)).toThrow('is empty');
  });
});
