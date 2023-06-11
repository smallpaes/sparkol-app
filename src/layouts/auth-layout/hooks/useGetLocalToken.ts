import LocalStorageKeys from '../../../constants/localStorageKeys';

const useGetLocalToken = (): string | null => {
  const token = localStorage.getItem(LocalStorageKeys.TOKEN);
  return token;
};

export default useGetLocalToken;
