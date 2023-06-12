import LocalStorageKeys from '../constants/localStorageKeys';

const getLocalToken = (): string | null => {
  const token = localStorage.getItem(LocalStorageKeys.TOKEN);
  return token;
};

export default getLocalToken;
