import React from 'react';
import Token from "../../services/entity/Token";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    const handleShowSidbar = () => {
        let body = document.querySelector('body');
        if (body.classList.contains('sidebar-enable')) {
            body.classList.remove('sidebar-enable');
            body.classList.remove('vertical-collpsed');
            return;
        }
        body.classList.add('sidebar-enable');
        body.classList.add('vertical-collpsed');
    }

    return (
        <div id="layout-wrapper">
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <div className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="img/security/logo.svg" alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="img/security/logo-light.png" alt="" height="19" />
                                </span>
                            </div>
                        </div>
                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                                id="vertical-menu-btn" onClick={() => handleShowSidbar()}>
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-inline-block">
                            <img className="rounded-circle header-profile-user"
                                 src="img/security/default-user-img.png"
                                 alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                                {JSON.parse(sessionStorage.getItem(Token.USER_STORAGE_KEY)).firstname}
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Drive Manager</li>
                            <li className={(props.active == 'dashboard' ? 'mm-active' : '')}>
                                <NavLink to="/dashboard" className="waves-effect">
                                    <i className="bx bxs-dashboard"></i>
                                    <span key="t-file-manager">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className={(props.active == 'drive' ? 'mm-active' : '')}>
                                <NavLink to="/drive" className="waves-effect">
                                    <i className="bx bxs-folder"></i>
                                    <span key="t-file-manager">Drive</span>
                                </NavLink>
                            </li>
                            <li className="menu-title">Social</li>
                            <li>
                                <a href="apps-filemanager.html" className="waves-effect">
                                    <i className="bx bxs-chat"></i>
                                    <span key="t-file-manager">Chat</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps-filemanager.html" className="waves-effect">
                                    <i className="bx bx-user"></i>
                                    <span key="t-file-manager">Mes amis</span>
                                </a>
                            </li>
                            <li className="menu-title">Settings</li>
                            <li>
                                <a href="apps-filemanager.html" className="waves-effect">
                                    <i className="bx bxs-chat"></i>
                                    <span key="t-file-manager">Paramètre</span>
                                </a>
                            </li>
                            <li>
                                <NavLink to="/logout" className="waves-effect">
                                    <i className="bx bx-log-in"></i>
                                    <span key="t-file-manager">Déconnexion</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Sidebar;
