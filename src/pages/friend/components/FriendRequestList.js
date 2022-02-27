import React from 'react';
import getMonthLabel from "../../../services/utils/month.util";

const RequestFriendList = () => {
    const getFriendRequests = () => {
        return [
            {
                lastname: 'LENIN',
                firstname: 'Francois',
                requestedAt: new Date()
            },
            {
                lastname: 'VENEL',
                firstname: 'Romain',
                requestedAt: new Date()
            },
            {
                lastname: 'LOVITON',
                firstname: 'Thomas',
                requestedAt: new Date()
            }
        ];
    }

    return (
        <div>
            <h4 className="card-title mb-1">Mes demandes d'amis</h4>
            <p className="card-title-desc">
                Retrouvez toutes les personnes qui vous ont demandé en amis. <br/>
                Vous pouvez accepter ou refuser leurs invitations.
            </p>
            <div className="row mb-2">
                <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..." />
                                <i className="bx bx-search-alt search-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-middle table-nowrap table-hover">
                    <thead className="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getFriendRequests().map((user, key) => (
                        <tr key={key}>
                            <td>
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle">
                                        {user.firstname.charAt(0).toLocaleUpperCase()}
                                        {user.lastname.charAt(0).toLocaleUpperCase()}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <p className="text-muted mb-0">{user.firstname}</p>
                            </td>
                            <td>{user.lastname}</td>
                            <td>
                                {user.requestedAt.getDate()} {getMonthLabel(user.requestedAt.getMonth())} {user.requestedAt.getFullYear()}
                            </td>
                            <td>
                                <ul className="list-inline font-size-20 contact-links mb-0">
                                    <li className="list-inline-item px-2">
                                        <span role="button" title="Message">
                                            <i className="bx bx-message-square-dots"></i>
                                        </span>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <span role="button" title="Profile">
                                            <i className="bx bx-user-circle"></i>
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="pagination pagination-rounded justify-content-center mt-4">
                        <li className="page-item disabled">
                            <span role="button" className="page-link">
                                <i className="mdi mdi-chevron-left"></i>
                            </span>
                        </li>
                        <li className="page-item">
                            <span role="button" className="page-link">1</span>
                        </li>
                        <li className="page-item active">
                            <span role="button" className="page-link">2</span>
                        </li>
                        <li className="page-item">
                            <span role="button" className="page-link">3</span>
                        </li>
                        <li className="page-item">
                            <span role="button" className="page-link">4</span>
                        </li>
                        <li className="page-item">
                            <span role="button" className="page-link">5</span>
                        </li>
                        <li className="page-item">
                            <span role="button" className="page-link">
                                <i className="mdi mdi-chevron-right"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RequestFriendList;