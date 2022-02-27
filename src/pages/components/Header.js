import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const authStore = useSelector(state => state.auth);

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
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <div className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="img/security/logo.svg" alt="" height="22"/>
                                </span>
                            <span className="logo-lg">
                                    <img src="img/security/logo-light.png" alt="" height="19"/>
                                </span>
                        </div>
                    </div>
                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                            id="vertical-menu-btn" onClick={() => handleShowSidbar()}>
                        <i className="fa fa-fw fa-bars"></i>
                    </button>
                    <form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Recherché..."/>
                            <span className="bx bx-search-alt"></span>
                        </div>
                    </form>
                </div>
                <div className="d-flex">
                    <div className="dropdown d-inline-block">
                        <img className="rounded-circle header-profile-user"
                             src="img/security/default-user-img.png"
                             alt="Header Avatar"/>
                        <span className="d-none d-xl-inline-block ms-1">
                                {JSON.parse(authStore.user).firstname}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
