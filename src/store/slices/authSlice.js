import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, googleSignIn } from "../../services/authService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    setPendingState,
    setFulfilledState,
    setRejectedState,
} from "../utils/setAuthStates";

export const signInUser = createAsyncThunk(
    "auth/signInUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await signIn(credentials);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await signUp(userData);
            return response;
        } catch (error) {
            return rejectWithValue(
                error.message || "An error occurred during sign up"
            );
        }
    }
);

export const googleSignInUser = createAsyncThunk(
    "auth/googleSignInUser",
    async (tokenId, { rejectWithValue }) => {
        try {
            const response = await googleSignIn(tokenId);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOutUser: (state) => {
            state.user = null;
            state.token = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.pending, setPendingState)
            .addCase(signInUser.fulfilled, setFulfilledState)
            .addCase(signInUser.rejected, setRejectedState)
            .addCase(signUpUser.pending, setPendingState)
            .addCase(signUpUser.fulfilled, setFulfilledState)
            .addCase(signUpUser.rejected, setRejectedState)
            .addCase(googleSignInUser.pending, setPendingState)
            .addCase(googleSignInUser.fulfilled, setFulfilledState)
            .addCase(googleSignInUser.rejected, setRejectedState);
    },
});

export const { signOutUser } = authSlice.actions;
export default authSlice.reducer;
