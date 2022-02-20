import React, {useEffect} from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {

    useEffect(() => {
        document.title = 'Skote Drive | Dashboard';
    }, [])

    return (
        <Sidebar active={"dashboard"}>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">Drive Manager</li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default Dashboard;