const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (typeof window !== 'undefined') {
    const state = store.getState();
    localStorage.setItem('auth', JSON.stringify(state.auth));
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }
  return result;
};

export default localStorageMiddleware;
