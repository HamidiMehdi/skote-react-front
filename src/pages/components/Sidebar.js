import React from 'react';
import Token from "../../services/entity/Token";

const Sidebar = () => {

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

    const handleUserSettings = () => {
        let btn = document.querySelector('#page-header-user-dropdown');
        if (btn.classList.contains('show')) {
            btn.classList.remove('show');
            btn.setAttribute("aria-expanded", 'false');
            return;
        }
        btn.classList.add('show');
        btn.setAttribute("aria-expanded", 'true');

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
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-notifications-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-bell bx-tada"></i>
                                <span className="badge bg-danger rounded-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                 aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small" key="t-view-all"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mh230" data-simplebar>
                                    <a href="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce
                                                        the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span
                                                        key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                 className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-simplified">It will seem like
                                                        simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i>
                                                        <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce
                                                        the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span
                                                        key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                 className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-occidental">As a skeptical Cambridge
                                                        friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i>
                                                        <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top d-grid">
                                    <a className="btn btn-sm btn-link font-size-14 text-center"
                                       href="javascript:void(0)">
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                                    id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    onClick={() => handleUserSettings()}
                            >
                                <img className="rounded-circle header-profile-user"
                                     src="img/security/default-user-img.png"
                                     alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                                    {JSON.parse(sessionStorage.getItem('user')).firstname}
                                </span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#"><i
                                    className="bx bx-user font-size-16 align-middle me-1"></i> <span
                                    key="t-profile">Profile</span></a>
                                <a className="dropdown-item d-block" href="#"><span
                                    className="badge bg-success float-end">11</span><i
                                    className="bx bx-wrench font-size-16 align-middle me-1"></i> <span
                                    key="t-settings">Settings</span></a>
                                <a className="dropdown-item" href="#"><i
                                    className="bx bx-lock-open font-size-16 align-middle me-1"></i> <span
                                    key="t-lock-screen">Lock screen</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i
                                    className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span
                                    key="t-logout">Logout</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Drive</li>
                            <li>
                                <a href="apps-filemanager.html" className="waves-effect">
                                    <i className="bx bx-file"></i>
                                    <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                                    <span key="t-file-manager">File Manager</span>
                                </a>
                            </li>
                            <li className="menu-title">Social</li>
                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                    <i className="bx bx-store"></i>
                                    <span key="t-ecommerce">Social</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li>
                                        <a href="ecommerce-products.html" key="t-products">Products</a>
                                    </li>
                                    <li>
                                        <a href="ecommerce-product-detail.html" key="t-product-detail">
                                            Product Detail
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
