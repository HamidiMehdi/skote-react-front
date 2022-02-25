import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <div className="mt-5 text-center">
            <p>
                {props.text} <NavLink to={props.url} className="font-weight-medium text-primary">
                {props.textButton}
            </NavLink>
            </p>
            <p>
                © {new Date().getFullYear()} Skote.
                Mehdi HAMIDI
            </p>
        </div>
    );
}

export default Footer;