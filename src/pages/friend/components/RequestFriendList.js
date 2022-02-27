import React from 'react';
import getMonthLabel from "../../../services/utils/month.util";

const RequestFriendList = () => {
    const getFriendRequests = () => {
        return [
            {
                lastname: 'LENIN',
                firstname: 'Francois',
                image: 'img/security/default-user-img.png',
                requestedAt: new Date()
            },
            {
                lastname: 'VENEL',
                firstname: 'Romain',
                image: 'img/security/default-user-img.png',
                requestedAt: new Date()
            },
            {
                lastname: 'LOVITON',
                firstname: 'Thomas',
                image: 'img/security/default-user-img.png',
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
            <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <tbody>
                    {getFriendRequests().map(user => (
                        <tr>
                            <td>
                                <img src={user.image} alt=""
                                     className="avatar-sm rounded-circle"/>
                            </td>
                            <td><b>{user.firstname} {user.lastname}</b></td>
                            <td>Demande d'amis
                                le {user.requestedAt.getDate()} {getMonthLabel(user.requestedAt.getMonth())} {user.requestedAt.getFullYear()}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-danger waves-effect waves-light">
                                    <i className="bx bx-block font-size-16 align-middle me-2"></i> Refuser
                                </button>
                                <button type="button" className="btn btn-success waves-effect waves-light">
                                    <i className="bx bx-check-double font-size-16 align-middle me-2"></i> Accepter
                                </button>

                                <button className="btn btn-outline-secondary btn-sm edit" title="Edit">
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                                <button className="btn btn-outline-secondary btn-sm edit" title="Edit">
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default RequestFriendList;