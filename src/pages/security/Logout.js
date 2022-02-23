import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import {LOGIN} from '../../utils/routes.location';

const Logout = () => {
    const location = useNavigate();

    useEffect(() => {
        AuthService.logout();
        location(LOGIN);
    }, [location])

    return (
        <div></div>
    );
}

export default Logout;