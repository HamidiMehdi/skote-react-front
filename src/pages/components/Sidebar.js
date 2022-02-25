import React from 'react';
import {NavLink} from "react-router-dom";
import * as ROUTES from '../../utils/routes.location';

const Sidebar = (props) => {
    return (
        <div className="vertical-menu">
            <div data-simplebar className="h-100">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Skote</li>
                        <li className={(props.active === 'chat' ? 'mm-active' : '')}>
                            <NavLink to={ROUTES.CHAT} className="waves-effect">
                                <i className="bx bx-message-dots"></i>
                                <span key="t-file-manager">Chat</span>
                            </NavLink>
                        </li>
                        <li className={(props.active === 'friend' ? 'mm-active' : '')}>
                            <NavLink to={ROUTES.FRIEND} className="waves-effect">
                                <i className="bx bx-user"></i>
                                <span key="t-file-manager">Amis</span>
                            </NavLink>
                        </li>
                        <li className="menu-title">Paramètre</li>
                        <li>
                            <a href="apps-filemanager.html" className="waves-effect">
                                <i className="bx bxs-user-detail"></i>
                                <span key="t-file-manager">Profil</span>
                            </a>
                        </li>
                        <li>
                            <NavLink to={ROUTES.LOGOUT} className="waves-effect">
                                <i className="bx bx-log-in"></i>
                                <span key="t-file-manager">Déconnexion</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
