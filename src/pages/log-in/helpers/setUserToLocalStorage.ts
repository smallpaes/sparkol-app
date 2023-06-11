import setDataToLocalStorage from './setDataToLocalStorage';
import { LocalUser } from '../../../types/user';
import LocalStorageKeys from '../../../constants/localStorageKeys';

const setTokenToLocalStorage = (userData: LocalUser) => {
  if (!userData) throw new Error('User Data is empty');
  setDataToLocalStorage(
    LocalStorageKeys.USER,
    JSON.parse(JSON.stringify(userData)),
  );
};

export default setTokenToLocalStorage;
