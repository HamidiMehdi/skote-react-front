import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN} from '../../services/utils/routes.location';
import {useDispatch} from "react-redux";
import {reset} from "../../services/redux/auth.store.redux";

const Logout = () => {
    const dispatch = useDispatch();
    const location = useNavigate();

    useEffect(() => {
        dispatch(reset())
        location(LOGIN);
    }, [dispatch, location]);

    return (
        <div></div>
    );
}

export default Logout;