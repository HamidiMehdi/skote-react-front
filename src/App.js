import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/security/Login.js';
import Register from './pages/security/Register';
import ResetPassword from './pages/security/ResetPassword';
import NotFound from './pages/NotFound';
import Drive from './pages/drive/Drive';
import PrivateRoute from './services/utils/PrivateRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/reset-password' element={<ResetPassword />} />
                <Route exact path='/drive' element={<PrivateRoute/>}>
                    <Route exact path='/drive' element={<Drive />} />
                </Route>
                <Route exact path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
