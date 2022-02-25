import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div id="layout-wrapper">
            <Header />
            <Sidebar active={props.active} />
            <div className="main-content">
                <div className="page-content">
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
)
}

export default Layout;
