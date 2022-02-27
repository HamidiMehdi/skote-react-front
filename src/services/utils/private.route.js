import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import * as ROUTES from './routes.location';
import {useDispatch, useSelector} from "react-redux";
import {reset} from "../redux/auth.store.redux";

const PrivateRoute = () => {
    const dispatch = useDispatch();
    const authStore = useSelector(state => state.auth);

    if (!authStore.auth) {
        dispatch(reset());
        return  <Navigate to={ROUTES.LOGIN}/>;
    }

    // TODO : gérer le refresh token si le token a expiré
    /**
     * const now = new Date();
     * const token = JSON.parse(atob(authStore.token.split('.')[1]));
     * if (token.iat > now.getTime() / 1000)
     */

    return <Outlet />;
}

export default PrivateRoute;