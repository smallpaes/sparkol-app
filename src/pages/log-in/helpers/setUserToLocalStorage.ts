import { LocalUser } from '../../../types/user';
import LocalStorageKeys from '../../../constants/localStorageKeys';
import { SetDataToLocalStorage } from '../log-in.types';

const setTokenToLocalStorage = (
  userData: LocalUser,
  setDataToLocalStorage: SetDataToLocalStorage,
) => {
  if (!userData || !userData.id || !userData.name)
    throw new Error('User Data is empty');
  setDataToLocalStorage(
    LocalStorageKeys.USER,
    JSON.parse(JSON.stringify(userData)),
  );
};

export default setTokenToLocalStorage;
