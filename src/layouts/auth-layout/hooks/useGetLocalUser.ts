import { LocalUser } from '../../../types/user';
import LocalStorageKeys from '../../../constants/localStorageKeys';

const useGetLocalUser = (): LocalUser | null => {
  const user = localStorage.getItem(LocalStorageKeys.USER);
  if (!user) return null;
  return JSON.parse(user);
};

export default useGetLocalUser;
