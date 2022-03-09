import React, {useEffect, useState} from 'react';
import getMonthLabel from "../../../services/utils/month.util";
import FriendApi from "../../../services/api/friend.api";
import {useSelector} from "react-redux";

const RequestFriendList = () => {
    const [friendRequests, setFriendRequests] = useState([]);
    const [friendModal, setFriendModal] = useState({});
    const [modalLoading, setModalLoading] = useState(false);
    const authStore = useSelector(state => state.auth);

    useEffect(() => {
        getFriendRequests();
    }, []);

    const getFriendRequests = (search = null, page = 1) => {
        FriendApi.getFriendRequests(authStore.token, JSON.parse(authStore.user).id , page)
            .then(friendRequestsList => {
                setFriendRequests(friendRequestsList);
            });
    }

    const saveFriendForModal = (key, action) => {
        setFriendModal({friend: friendRequests[key], action: action});
    }

    const handleFriendRequest = () => {
        setModalLoading(true);
        FriendApi.acceptRejectFriendRequest(authStore.token, friendModal.friend.setAccepted(friendModal.action === 'add'))
            .then((friendship) => {
                setFriendRequests(friendRequests.filter(friend => friend.id !== friendship.id));
                document.querySelector('#friendRequestCloseModal').click();
                setModalLoading(false);
            })
            .catch(() => {
                setModalLoading(false);
            });
    }

    const removeFriendRequestFromState = (id) => {
        const filtered = friendRequests.filter(friendship => friendship.id !== id);
        setFriendRequests(filtered);
    }

    return (
        <div>
            <h4 className="card-title mb-1">Mes demandes d'amis</h4>
            <p className="card-title-desc">
                Retrouvez toutes les personnes qui vous ont demandé en amis.
            </p>
            <div className="row mb-2">
                <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Search..."/>
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
                    {friendRequests.map((friendship, key) => (
                        <tr key={key}>
                            <td>
                                <div className="avatar-xs">
                                    <span className="avatar-title rounded-circle">
                                        {friendship.user.firstname.charAt(0).toLocaleUpperCase()}
                                        {friendship.user.lastname.charAt(0).toLocaleUpperCase()}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <p className="text-muted mb-0">{friendship.user.firstname}</p>
                            </td>
                            <td>{friendship.user.lastname}</td>
                            <td>
                                {friendship.createdAt.getDate()} {getMonthLabel(friendship.createdAt.getMonth())} {friendship.createdAt.getFullYear()}
                            </td>
                            <td>
                                <ul className="list-inline font-size-20 contact-links mb-0">
                                    <li className="list-inline-item px-2">
                                        <span role="button" onClick={() => saveFriendForModal(key, 'add')} data-bs-toggle="modal"
                                              data-bs-target="#friendRequestModal">
                                            <i className="bx bx-check-circle"></i>
                                        </span>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <span role="button" onClick={() => saveFriendForModal(key, 'remove')}
                                              data-bs-toggle="modal" data-bs-target="#friendRequestModal">
                                            <i className="bx bx bx-x-circle"></i>
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                    {friendRequests.length === 0 && (
                        <tr>
                            <td colSpan={5}>
                                <p className="text-muted mb-0">Aucune demande d'amis trouvée</p>
                            </td>
                        </tr>
                    )}
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
            <div className="modal fade" id="friendRequestModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Demande d'amis</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            {friendModal && friendModal.action === 'add' && (
                                <p>
                                    Vous êtes sur le point d'accepter la demande d'amis
                                    de {friendModal.friend.user.firstname} {friendModal.friend.user.lastname}.
                                </p>
                            )}
                            {friendModal && friendModal.action === 'remove' && (
                                <p>
                                    Vous êtes sur le point de refuser la demande d'amis
                                    de {friendModal.friend.user.firstname} {friendModal.friend.user.lastname}.
                                </p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="friendRequestCloseModal" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" disabled={modalLoading} onClick={() => handleFriendRequest()}>
                                {modalLoading &&
                                    <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
                                }
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestFriendList;