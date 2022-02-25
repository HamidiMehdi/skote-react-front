import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import * as ROUTES from '../utils/routes.location';

const PrivateRoute = () => {
    let auth = null;
    let storage = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_KEY_STORAGE));
    if (storage) {
        let token = storage.token;
        let dateNow = new Date();
        if (token.expirationAt > dateNow.getTime() / 1000) {
            auth = true;
        } else {
            localStorage.removeItem(process.env.REACT_APP_USER_KEY_STORAGE);
            auth = false;
        }
    } else {
        localStorage.removeItem(process.env.REACT_APP_USER_KEY_STORAGE);
        auth = false;
    }

    return auth ? <Outlet/> : <Navigate to={ROUTES.LOGIN}/>;
}

export default PrivateRoute;