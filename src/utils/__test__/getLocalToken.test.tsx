import { describe, expect, test, vi } from 'vitest';

import getLocalToken from '../getLocalToken';

describe('getLocalToken', () => {
  test('should return null if no token is stored in local storage', async () => {
    const spyGetItem = vi
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(null);

    const token = getLocalToken();
    expect(spyGetItem).toHaveBeenCalled();
    expect(token).toBe(null);
  });

  test('should return token if token is stored in local storage', async () => {
    const fakeToken = 'fakeToken';
    const spyGetItem = vi
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(fakeToken);

    const token = getLocalToken();
    expect(spyGetItem).toHaveBeenCalled();
    expect(token).toBe(fakeToken);
  });
});
