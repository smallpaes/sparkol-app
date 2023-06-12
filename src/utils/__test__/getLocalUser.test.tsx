import { describe, expect, test, vi } from 'vitest';

import getLocalUser from '../getLocalUser';
import { LocalUser } from '../../types/user';

describe('getLocalUser', () => {
  test('should return null if no user is stored in local storage', async () => {
    const spyGetItem = vi
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(null);

    const token = getLocalUser();
    expect(spyGetItem).toHaveBeenCalled();
    expect(token).toBe(null);
  });

  test('should return token if token is stored in local storage', async () => {
    const fakeLocalUser: LocalUser = {
      id: 1,
      name: 'name',
    };
    const spyGetItem = vi
      .spyOn(window.localStorage.__proto__, 'getItem')
      .mockReturnValue(JSON.stringify(fakeLocalUser));

    const token = getLocalUser();
    expect(spyGetItem).toHaveBeenCalled();
    expect(token).toStrictEqual(fakeLocalUser);
  });
});
