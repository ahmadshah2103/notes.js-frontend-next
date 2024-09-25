import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import notesReducer from "./slices/notesSlice";
import localStorageMiddleware from "./utils/localStorageMiddleware";

const initialState = {
    auth: { user: null, token: null, error: null, loading: false },
    notes: { notes: [], currentNote: null, error: null, loading: false },
};

const loadState = () => {
    try {
        const authState = JSON.parse(localStorage.getItem("auth"));
        const notesState = JSON.parse(localStorage.getItem("notes"));
        return {
            auth: authState || initialState.auth,
            notes: notesState || initialState.notes,
        };
    } catch (err) {
        console.error("Error loading state from localStorage:", err);
        return initialState;
    }
};

const saveState = (state) => {
    try {
        localStorage.setItem("auth", JSON.stringify(state.auth));
        localStorage.setItem("notes", JSON.stringify(state.notes));
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
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

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
