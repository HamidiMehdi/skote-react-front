import React from 'react';

const Header = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">{new Date().getFullYear()} &copy; Skote.</div>
                    <div className="col-sm-6">
                        <div className="text-sm-end d-none d-sm-block">
                            Designé &amp; Développé par Mehdi HAMIDI
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Header;
