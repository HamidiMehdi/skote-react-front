import React, {useEffect} from 'react';
import Layout from "../components/Layout";

const Profil = () => {
    useEffect(() => {
        document.title = 'Skote | Profil';
    }, [])

    return (
        <Layout active={"profil"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Profil</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Skote</li>
                                    <li className="breadcrumb-item active">Profil</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profil;