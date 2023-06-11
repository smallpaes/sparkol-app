const setDataToLocalStorage = <T>(key: string, data: T) => {
  if (!key || !data) throw new Error('Key or data is empty');
  localStorage.setItem(key, JSON.stringify(data));
};

export default setDataToLocalStorage;
