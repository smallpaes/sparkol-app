import setDataToLocalStorage from './setDataToLocalStorage';
import LocalStorageKeys from '../../../constants/localStorageKeys';

const setTokenToLocalStorage = (token: string) => {
  if (!token) throw new Error('Token is empty');
  setDataToLocalStorage(LocalStorageKeys.TOKEN, token);
};

export default setTokenToLocalStorage;
