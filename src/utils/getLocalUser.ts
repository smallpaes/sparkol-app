import { LocalUser } from '../types/user';
import LocalStorageKeys from '../constants/localStorageKeys';

const getLocalUser = (): LocalUser | null => {
  const user = localStorage.getItem(LocalStorageKeys.USER);
  if (!user) return null;
  return JSON.parse(user);
};

export default getLocalUser;
