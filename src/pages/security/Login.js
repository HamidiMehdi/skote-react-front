import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Footer from "./components/Footer";
import AuthService from "../../services/auth.service";
import * as ROUTES from '../../utils/routes.location';

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const [formErrors, setFormErrors] = useState({email: '', password: ''});
    const location = useNavigate();

    useEffect(() => {
        document.title = 'Skote Drive | Authentification';
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formIsValid()) {
            return;
        }

        let tokens = null
        AuthService.login(form.email, form.password)
            .then(token => {
                tokens = token;
                return AuthService.me(token.token);
            })
            .then(user => {
                AuthService.storeUser(tokens, user);
                location(ROUTES.DASHBOARD);
            });
    }

    const formIsValid = () => {
        let errors = {email: '', password: ''};
        if (!form.email) {
            errors.email = 'Ce champs est requis';
        } else if (!form.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/)) {
            errors.email = 'Cet email n\'est pas valide';
        }
        if (!form.password) {
            errors.password = 'Ce champs est requis';
        }

        setFormErrors(errors);
        if (!errors.email && !errors.password) {
            return true;
        }

        return false;
    }

    const showPassword = () => {
        let input = document.querySelector('#input_password');
        if (input.type === 'password') {
            input.type = 'input';
            return;
        }

        input.type = 'password';
    }

    return (
        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Skote Drive</h5>
                                            <p>Connectez-vous pour accéder à votre drive.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="img/security/profile-img.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="auth-logo">
                                    <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="img/security/logo.svg" alt="" className="rounded-circle"
                                                     height="34"/>
                                            </span>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Entrez votre email"
                                                   onChange={(event) => setForm({...form, email: event.target.value})}
                                            />
                                            <ul className="parsley-errors-list filled">
                                                <li className="parsley-required">{formErrors.email}</li>
                                            </ul>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mot de passe</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" id="input_password"
                                                       placeholder="Entrez votre mot de passe" aria-label="Mot de passe"
                                                       aria-describedby="password-addon"
                                                       onChange={(event) => setForm({
                                                           ...form,
                                                           password: event.target.value
                                                       })}
                                                />
                                                <button className="btn btn-light " type="button" id="password-addon"
                                                        onClick={() => showPassword()}
                                                >
                                                    <i className="mdi mdi-eye-outline"></i>
                                                </button>
                                            </div>
                                            <ul className="parsley-errors-list filled">
                                                <li className="parsley-required">{formErrors.password}</li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">
                                                Se connecter
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mt-4 text-center">
                                        <h5 className="font-size-14 mb-3">Se connecter avec</h5>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href='#/'
                                                   className="social-list-item bg-primary text-white border-primary">
                                                    <i className="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href='#/'
                                                   className="social-list-item bg-info text-white border-info">
                                                    <i className="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href='#/'
                                                   className="social-list-item bg-danger text-white border-danger">
                                                    <i className="mdi mdi-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <NavLink to={ROUTES.RESET_PASSWORD} className="text-muted">
                                            <i className="mdi mdi-lock mr-1"></i>
                                            Vous avez oublié votre mot de passe ?
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer
                            text="Vous n'avez pas de compte ?"
                            url={ROUTES.REGISTER}
                            textButton="Créez votre compte !"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
