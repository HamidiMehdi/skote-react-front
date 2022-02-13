import React, {useEffect} from 'react';
import Footer from "./components/Footer";

const ResetPassword = () => {
    useEffect(() => {
        document.title = 'Skote Drive | Récupérer votre mot de passe';
    }, [])

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
                                            <p>Récupérer votre compte avec votre email.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="img/security/profile-img.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div>
                                    <a href="index.html">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="img/security/logo.svg" alt="" className="rounded-circle"
                                                     height="34" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2">
                                    <form className="form-horizontal">
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Entrez votre email" />
                                        </div>
                                        <div className="text-end">
                                            <button className="btn btn-primary w-md waves-effect waves-light"
                                                    type="submit">Récupérer mon compte
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <Footer
                            text="Vous vous souvenez de votre compte ?"
                            url="/login"
                            textButton="Connectez-vous !"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;