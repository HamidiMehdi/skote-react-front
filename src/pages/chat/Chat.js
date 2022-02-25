import React, {useEffect} from 'react';
import Layout from "../components/Layout";

const Chat = () => {
    useEffect(() => {
        document.title = 'Skote | Chat';
    }, [])

    return (
        <Layout active={"chat"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 className="mb-sm-0 font-size-18">Chat</h4>
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">Skote</li>
                                    <li className="breadcrumb-item active">Chat</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Chat;