import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.title = 'Stoke Drive | Authentification';
    }, [])

    const handleSubmit = (e) => {
        if (email && password) {
            console.log('lance le bail')
            return;
        }
    }

    return (
        <div>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-soft-primary">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Skote Drive</h5>
                                                <p>Connectez-vous pour accéder à votre drive.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src='img/security/profile-img.png' alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div>
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="img/security/logo.svg" alt="" className="rounded-circle" height="34" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <div className="form-group">
                                            <label htmlFor="username">Email</label>
                                            <input type="text" className="form-control" id="username" placeholder="Entrez votre email"
                                                   onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="userpassword">Mot de passe</label>
                                            <input type="password" className="form-control" id="userpassword" placeholder="Entrez votre mot de passe"
                                                   onChange={(event) => setPassword(event.target.value)}
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <button className="btn btn-primary btn-block waves-effect waves-light" type="button"
                                                    onClick={handleSubmit}
                                            >
                                                Se connecter
                                            </button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <h5 className="font-size-14 mb-3">Se connecter avec</h5>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-list-item bg-primary text-white border-primary">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-list-item bg-info text-white border-info">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-list-item bg-danger text-white border-danger">
                                                        <i className="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <NavLink to="/reset/password" className="text-muted">
                                                <i className="mdi mdi-lock mr-1"></i>
                                                Vous avez oublié votre mot de passe ?
                                            </NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <div>
                                    <p>
                                        Vous n'avez pas de compte ? <NavLink to="/register" className="font-weight-medium text-primary">
                                        Créez votre compte !
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
        </div>
    );
}

export default Login;
