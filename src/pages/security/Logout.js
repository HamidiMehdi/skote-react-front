import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Token from "../../services/entity/Token";

const Logout = () => {
    const location = useNavigate();

    useEffect(() => {
        localStorage.removeItem(Token.JWT_STORAGE_KEY);
        sessionStorage.removeItem(Token.USER_STORAGE_KEY);
        location('/login');
    }, [])

    return (
        <div></div>
    );
}

export default Logout;