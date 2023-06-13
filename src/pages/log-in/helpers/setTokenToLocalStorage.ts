import LocalStorageKeys from '../../../constants/localStorageKeys';
import { SetDataToLocalStorage } from '../log-in.types';

const setTokenToLocalStorage = (
  token: string,
  setDataToLocalStorage: SetDataToLocalStorage,
) => {
  if (!token) throw new Error('Token is empty');
  setDataToLocalStorage(LocalStorageKeys.TOKEN, token);
};

export default setTokenToLocalStorage;
