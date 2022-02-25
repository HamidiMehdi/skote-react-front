import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import FriendList from "./components/FriendList";
import RequestFriendList from "./components/RequestFriendList";
import FindFriendList from "./components/FindFriendList";

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
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <a className={"nav-link " + (tab === friendListTab ? 'active' : '')} id="v-pills-gen-ques-tab" data-bs-toggle="pill"
                                   href="#v-pills-gen-ques" role="tab" aria-controls="v-pills-gen-ques"
                                   onClick={() => setTab(friendListTab)} aria-selected="true">
                                    <i className="bx bx-question-mark d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Mes amis</p>
                                </a>
                                <a className={"nav-link " + (tab === findFriendListTab ? 'active' : '')} id="v-pills-privacy-tab" data-bs-toggle="pill"
                                   href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy"
                                   onClick={() => setTab(findFriendListTab)} aria-selected="false">
                                    <i className="bx bx-check-shield d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Trouver un amis</p>
                                </a>
                                <a className={"nav-link " + (tab === requestFriendListTab ? 'active' : '')} id="v-pills-support-tab" data-bs-toggle="pill"
                                   href="#v-pills-support" role="tab" aria-controls="v-pills-support"
                                   onClick={() => setTab(requestFriendListTab)} aria-selected="false">
                                    <i className="bx bx-support d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="fw-bold mb-4">Mes demandes d'amis</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className={"tab-pane fade " + (tab === friendListTab ? 'active show' : '')} id="v-pills-gen-ques" role="tabpanel"
                                             aria-labelledby="v-pills-gen-ques-tab">
                                            <FriendList />
                                        </div>
                                        <div className={"tab-pane fade " + (tab === findFriendListTab ? 'active show' : '')} id="v-pills-privacy" role="tabpanel"
                                             aria-labelledby="v-pills-privacy-tab">
                                            <FindFriendList />
                                        </div>
                                        <div className={"tab-pane fade " + (tab === requestFriendListTab ? 'active show' : '')} id="v-pills-support" role="tabpanel"
                                             aria-labelledby="v-pills-support-tab">
                                            <RequestFriendList />
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