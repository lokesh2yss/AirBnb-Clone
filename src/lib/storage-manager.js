const AUTH_TOKEN_KEY = '__auth-token__';

function getStorageItem(key) {
  return localStorage.getItem(key);
}

function setStorageItem(key, value) {
  localStorage.setItem(key, value);
}

function removeStorageItem(key) {
  localStorage.removeItem(key);
}

export { AUTH_TOKEN_KEY, getStorageItem, setStorageItem, removeStorageItem };
