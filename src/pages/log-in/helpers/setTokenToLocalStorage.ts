const KEY = 'token';

const setTokenToLocalStorage = (token: string) => {
  if (!token) throw new Error('Token is empty');
  localStorage.setItem(KEY, token);
};

export default setTokenToLocalStorage;
