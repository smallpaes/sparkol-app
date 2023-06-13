import { SetDataToLocalStorage } from '../log-in.types';

const setDataToLocalStorage: SetDataToLocalStorage = (key, data) => {
  if (!key || !data) throw new Error('Key or data is empty');
  localStorage.setItem(key, JSON.stringify(data));
};

export default setDataToLocalStorage;
