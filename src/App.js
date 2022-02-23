import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/security/Login.js';
import Register from './pages/security/Register';
import ResetPassword from './pages/security/ResetPassword';
import NotFound from './pages/NotFound';
import Drive from './pages/drive/Drive';
import PrivateRoute from './utils/private.route';
import Logout from "./pages/security/Logout";
import Dashboard from "./pages/drive/Dashboard";
import * as ROUTES from './utils/routes.location';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={ROUTES.BASE} element={<Login />} />
                <Route exact path={ROUTES.LOGIN} element={<Login />} />
                <Route exact path={ROUTES.LOGOUT} element={<Logout />} />
                <Route exact path={ROUTES.REGISTER} element={<Register />} />
                <Route exact path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
                <Route exact path={ROUTES.DASHBOARD} element={<PrivateRoute/>}>
                    <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Route>
                <Route exact path={ROUTES.DRIVE} element={<PrivateRoute/>}>
                    <Route exact path={ROUTES.DRIVE} element={<Drive />} />
                </Route>
                <Route exact path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
