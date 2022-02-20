import React, {useEffect, useState} from 'react';
import Footer from "./components/Footer";
import SecurityModel from "../../services/model/SecurityModel";
import UserModel from "../../services/model/UserModel";
import Token from "../../services/entity/Token";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useNavigate();

    useEffect(() => {
        document.title = 'Skote Drive | Inscription';
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const securityModel = new SecurityModel();
        if (lastname && firstname && email && password) {
            securityModel.register(lastname, firstname, email, password)
                .then(userRegistred => securityModel.authentication(userRegistred.email, password))
                .then(() => (new UserModel()).getCurrentUser())
                .then(user => {
                    window.sessionStorage.setItem(Token.USER_STORAGE_KEY, JSON.stringify(user));
                    location('/dashboard');
                });
        }
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
                                                   onChange={(event) => setLastname(event.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="firstname" className="form-label">Prénom</label>
                                            <input type="firstname" className="form-control" id="firstname"
                                                   placeholder="Entrez votre prénom"
                                                   onChange={(event) => setFirstname(event.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Entrez votre email"
                                                   onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mot de passe</label>
                                            <div className="input-group auth-pass-inputgroup">
                                                <input type="password" className="form-control" id="input_password"
                                                       placeholder="Entrez votre mot de passe" aria-label="Mot de passe"
                                                       aria-describedby="password-addon"
                                                       onChange={(event) => setPassword(event.target.value)}
                                                />
                                                <button className="btn btn-light " type="button" id="password-addon"
                                                        onClick={() => showPassword()}
                                                >
                                                    <i className="mdi mdi-eye-outline"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">
                                                S'enregistrer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Footer
                            text="Vous avez déjà un compte ?"
                            url="/login"
                            textButton="Connectez-vous !"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;