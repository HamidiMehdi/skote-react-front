import {configureStore, createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {auth: false, token: null, refreshToken: null, user: null},
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        reset: (state) => {
            state.auth = false;
            state.token = null;
            state.refreshToken = null;
            state.user = null;
        }
    }
});

export const {setAuth, setToken, setRefreshToken, setUser, reset} = authSlice.actions;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});
