export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setStorage = (key, payload) => {
  return localStorage.setItem(key, JSON.stringify(payload));
};
