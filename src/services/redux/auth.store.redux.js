import {configureStore, createSlice} from "@reduxjs/toolkit";
import CryptoJS from 'crypto-js';

const loadState = () => {
    try {
        const stateCrypt = localStorage.getItem(process.env.REACT_APP_REDUX_STORE_AUTH_KEY);
        if (!stateCrypt) {
            return {auth: false, token: null, refreshToken: null, user: null}
        }
        const decryptState = CryptoJS.AES.decrypt(stateCrypt, process.env.REACT_APP_CRYPTO_SALT).toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptState);
    } catch (err) {
    }
}

const saveState = (state) => {
    try {
        const stateCrypt = CryptoJS.AES.encrypt(JSON.stringify(state), process.env.REACT_APP_CRYPTO_SALT).toString();
        localStorage.setItem(process.env.REACT_APP_REDUX_STORE_AUTH_KEY, stateCrypt);
    } catch (err) {
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: loadState(),
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
    },
});

store.subscribe(() => {
    saveState(store.getState().auth);
    if (store.getState().auth.auth === false) {
        localStorage.removeItem(process.env.REACT_APP_REDUX_STORE_AUTH_KEY);
    }
});