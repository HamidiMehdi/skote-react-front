import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const ResetPassword = () => {
    useEffect(() => {
        document.title = 'Stoke Drive | Récupérer votre mot de passe';
    }, [])

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-soft-primary">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Récupérer votre compte</h5>
                                            <p>Récupérer votre compte avec votre email.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="img/security/profile-img.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div>
                                    <div className="avatar-md profile-user-wid mb-4">
                                        <span className="avatar-title rounded-circle bg-light">
                                            <img src="img/security/logo.svg" alt="" className="rounded-circle"
                                                 height="34" />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-2">

                                    <form className="form-horizontal"
                                          action="https://themesbrand.com/skote/layouts/vertical/index.html">

                                        <div className="form-group">
                                            <label htmlFor="useremail">Email</label>
                                            <input type="email" className="form-control" id="useremail"
                                                   placeholder="Entrez votre email" />
                                        </div>

                                        <div className="form-group row mb-0">
                                            <div className="col-12 text-right">
                                                <button className="btn btn-primary w-md waves-effect waves-light"
                                                        type="submit">
                                                    Récupérer mon compte
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p>
                                Vous vous souvenez de votre compte ? <NavLink to="/login" className="font-weight-medium text-primary">
                                    Connectez-vous !
                                </NavLink>
                            </p>
                            <p>
                                © {new Date().getFullYear()} Skote Drive.
                                By Mehdi HAMIDI
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;