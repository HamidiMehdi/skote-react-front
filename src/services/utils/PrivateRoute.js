import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Token from "../entity/Token";

const PrivateRoute = () => {
    let auth = null;
    let token = JSON.parse(localStorage.getItem(Token.JWT_STORAGE_KEY));
    if(token){
        let dateNow = new Date();
        if(token.expirationAt > dateNow.getTime()/1000){
            auth = true;
        } else {
            localStorage.removeItem(Token.JWT_STORAGE_KEY);
            sessionStorage.removeItem(Token.USER_STORAGE_KEY);
            auth = false;
        }
    } else {
        localStorage.removeItem(Token.JWT_STORAGE_KEY);
        sessionStorage.removeItem(Token.USER_STORAGE_KEY);
        auth = false;
    }

    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;