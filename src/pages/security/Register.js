import React, {useEffect, useState} from 'react';
import Footer from "./components/Footer";
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/auth.service";
import * as ROUTES from '../../utils/routes.location';

const Register = () => {
    const [form, setForm] = useState({lastname: '', firstname: '', email: '', password: ''});
    const [formErrors, setFormErrors] = useState({lastname: '', firstname: '', email: '', password: ''});
    const [formSubmited, setFormSubmited] = useState(false);
    const location = useNavigate();

    useEffect(() => {
        document.title = 'Skote Drive | Inscription';
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formIsValid()) {
            return;
        }
        setFormSubmited(true);

        let currentUser = null;
        AuthService.register(form.lastname, form.firstname, form.email, form.password)
            .then(user => {
                currentUser = user;
                return AuthService.login(form.email, form.password);
            })
            .then(token => {
                AuthService.storeUser(token, currentUser);
                location(ROUTES.DASHBOARD);
            })
            .catch(() => {
                setFormSubmited(false);
                setFormErrors({...formErrors, email: 'Cet email exist déjà'});
            });
    }

    const formIsValid = () => {
        let errors = {lastname: '', firstname: '', email: '', password: ''};
        if (!form.lastname) {
            errors.lastname = 'Ce champs est requis';
        }
        if (!form.firstname) {
            errors.firstname = 'Ce champs est requis';
        }
        if (!form.email) {
            errors.email = 'Ce champs est requis';
        } else if (!form.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/)) {
            errors.email = 'Cet email n\'est pas valide';
        }
        if (!form.password) {
            errors.password = 'Ce champs est requis';
        }

        setFormErrors(errors);
        if (!errors.lastname && !errors.firstname && !errors.email && !errors.password) {
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
                                            <p>Incrivez-vous gratuitement pour avoir un drive.</p>
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
                                            <label htmlFor="lastname" className="form-label">Nom</label>
                                            <input type="lastname" className="form-control" id="lastname"
                                                   placeholder="Entrez votre nom"
                                                   onChange={(event) => setForm({
                                                       ...form,
                                                       lastname: event.target.value
                                                   })}
                                            />
                                            <ul className="parsley-errors-list filled">
                                                <li className="parsley-required">{formErrors.lastname}</li>
                                            </ul>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="firstname" className="form-label">Prénom</label>
                                            <input type="firstname" className="form-control" id="firstname"
                                                   placeholder="Entrez votre prénom"
                                                   onChange={(event) => setForm({
                                                       ...form,
                                                       firstname: event.target.value
                                                   })}
                                            />
                                            <ul className="parsley-errors-list filled">
                                                <li className="parsley-required">{formErrors.firstname}</li>
                                            </ul>
                                        </div>
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
                                            <button className="btn btn-primary waves-effect waves-light" type="submit"
                                                    disabled={formSubmited}
                                            >
                                                {formSubmited &&
                                                    <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
                                                }
                                                S'enregistrer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Footer
                            text="Vous avez déjà un compte ?"
                            url={ROUTES.LOGIN}
                            textButton="Connectez-vous !"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;