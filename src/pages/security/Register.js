import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

const Register = () => {
    useEffect(() => {
        document.title = 'Stoke Drive | Inscription';
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
                                            <h5 className="text-primary">Inscrivez-vous</h5>
                                            <p>Incrivez-vous gratuitement pour avoir un drive.</p>
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
                                            <img src="img//security/logo.svg" alt="" className="rounded-circle"
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

                                        <div className="form-group">
                                            <label htmlFor="lastname">Nom</label>
                                            <input type="text" className="form-control" id="lastname"
                                                   placeholder="Entrez votre nom" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="firstname">Prénom</label>
                                            <input type="text" className="form-control" id="firstname"
                                                   placeholder="Entrez votre prénom" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="userpassword">Mot de passe</label>
                                            <input type="password" className="form-control" id="userpassword"
                                                   placeholder="Entrez votre mot de passe" />
                                        </div>

                                        <div className="mt-4">
                                            <button className="btn btn-primary btn-block waves-effect waves-light"
                                                    type="submit">S'enregistrer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <div>
                                <p>
                                    Vous avez déjà un compte ? <NavLink to="/login" className="font-weight-medium text-primary">
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
        </div>
    );
}

export default Register;