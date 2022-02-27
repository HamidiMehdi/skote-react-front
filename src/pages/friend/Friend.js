import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import FriendList from "./components/FriendList";
import FindFriendList from "./components/FindFriendList";
import FriendRequestList from "./components/FriendRequestList";

const Dashboard = () => {
    const friendListTab = 'friendListTab';
    const findFriendListTab = 'findFriendList';
    const requestFriendListTab = 'requestFriendListTab';
    const [tab, setTab] = useState(friendListTab)

    useEffect(() => {
        document.title = 'Skote | Amis';
    }, [])

    return (
        <Layout active={"friend"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Amis</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Skote</li>
                                    <li className="breadcrumb-item active">Amis</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checkout-tabs">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="nav flex-column nav-pills">
                                <a href="#friend" className={"nav-link " + (tab === friendListTab ? 'active' : '')}
                                   onClick={() => setTab(friendListTab)}>
                                    <i className="bx bxs-user-detail d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Mes amis</p>
                                </a>
                                <a href="#find-friend" className={"nav-link " + (tab === findFriendListTab ? 'active' : '')}
                                   onClick={() => setTab(findFriendListTab)}>
                                    <i className="bx bx-user-plus d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Trouver un amis</p>
                                </a>
                                <a href="#friend-request" className={"nav-link " + (tab === requestFriendListTab ? 'active' : '')}
                                   onClick={() => setTab(requestFriendListTab)}>
                                    <i className="bx bx-user-check d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Mes demandes d'amis</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div
                                            className={"tab-pane fade " + (tab === friendListTab ? 'active show' : '')}>
                                            <FriendList/>
                                        </div>
                                        <div
                                            className={"tab-pane fade " + (tab === findFriendListTab ? 'active show' : '')}>
                                            <FindFriendList/>
                                        </div>
                                        <div
                                            className={"tab-pane fade " + (tab === requestFriendListTab ? 'active show' : '')}>
                                            <FriendRequestList/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    );
}

export default Dashboard;