import React from 'react';
import getMonthLabel from "../../../utils/month.util";

const FriendList = () => {

    const getFriends = () => {
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
            <h4 className="card-title mb-1">Mes amis</h4>
            <p className="card-title-desc">
                Retrouvez l'ensemble des personnes avec qui vous êtes amis.
            </p>
            <div className="table-responsive">
                <table className="table mb-0">

                    <thead className="table-light">
                    <tr>
                        <th>Image</th>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getFriends().map(user => (
                        <tr>
                            <th>
                                <img src={user.image} alt="" className="avatar-sm rounded-circle"/>
                            </th>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>
                                {user.requestedAt.getDate()} {getMonthLabel(user.requestedAt.getMonth())} {user.requestedAt.getFullYear()}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FriendList;