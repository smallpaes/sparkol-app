import { useContext } from 'react';

import { UserContext } from '../context/UserContext';
import LocalStorageKeys from '../constants/localStorageKeys';

const useLogOut = () => {
  const { clearUser } = useContext(UserContext);
  return (): void => {
    clearUser();
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    localStorage.removeItem(LocalStorageKeys.USER);
  };
};

export default useLogOut;
