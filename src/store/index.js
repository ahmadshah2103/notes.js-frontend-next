import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import notesReducer from "./slices/notesSlice";
import localStorageMiddleware from "./utils/localStorageMiddleware";

const initialState = {
    auth: { user: null, token: null, error: null, loading: false },
    notes: { notes: [], currentNote: null, error: null, loading: false },
};

const isClient = typeof window !== 'undefined';

const loadState = () => {
    if (isClient) {
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (err) {
            console.error('Error loading state from localStorage:', err);
            return undefined;
        }
    }
    return undefined;
};

const saveState = (state) => {
    if (isClient) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (err) {
            console.error('Error saving state to localStorage:', err);
        }
    }
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer,
    },
    preloadedState: loadState(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

if (isClient) {
    store.subscribe(() => {
        saveState(store.getState());
    });
}

export default store;
