import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/security/Login.js';
import Register from './pages/security/Register';
import ResetPassword from './pages/security/ResetPassword';
import NotFound from './pages/NotFound';
import PrivateRoute from './utils/private.route';
import Logout from "./pages/security/Logout";
import Friend from "./pages/friend/Friend";
import * as ROUTES from './utils/routes.location';
import Chat from "./pages/chat/Chat";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={ROUTES.BASE} element={<Login/>}/>
                <Route exact path={ROUTES.LOGIN} element={<Login/>}/>
                <Route exact path={ROUTES.LOGOUT} element={<Logout/>}/>
                <Route exact path={ROUTES.REGISTER} element={<Register/>}/>
                <Route exact path={ROUTES.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route exact path={ROUTES.CHAT} element={<PrivateRoute/>}>
                    <Route exact path={ROUTES.CHAT} element={<Chat/>}/>
                </Route>
                <Route exact path={ROUTES.FRIEND} element={<PrivateRoute/>}>
                    <Route exact path={ROUTES.FRIEND} element={<Friend/>}/>
                </Route>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
