import React, {useEffect, useState} from 'react';
import getMonthLabel from "../../../services/utils/month.util";
import FriendApi from "../../../services/api/friend.api";
import {useSelector} from "react-redux";
import Pagination from "../../components/Pagination";

const RequestFriendList = () => {
    const [friendships, setFriendships] = useState([]);
    const [friendshipsLoading, setFriendshipsLoading] = useState(false);

    const [pagination, setPagination] = useState({search: '', totalItems: 0, page: 1})
    const [searchTimer, setSearchTimer] = useState(null);

    const [friendModal, setFriendModal] = useState({});
    const [modalLoading, setModalLoading] = useState(false);

    const itemsPerPage = 10;
    const authStore = useSelector(state => state.auth);

    useEffect(() => {
        getFriendship();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getFriendship = (search = '', page = 1) => {
        setFriendshipsLoading(true);
        FriendApi.getCollection(authStore.token, JSON.parse(authStore.user).id, itemsPerPage, search, page)
            .then(friendshipCollection => {
                setFriendships(friendshipCollection.items);
                setFriendshipsLoading(false);
                setPagination({...pagination, page: page, totalItems: friendshipCollection.totalItems});
            })
            .catch(() => {
                setFriendshipsLoading(false);
            });
    }

    const handleSearch = (value) => {
        setPagination({...pagination, search: value});
        if (searchTimer !== null) {
            setSearchTimer(clearTimeout(searchTimer));
        }
        setSearchTimer(setTimeout(() => {
            getFriendship(value)
        }, 400));
    }

    const handleFriendship = () => {
        setModalLoading(true);
        FriendApi.acceptRejectFriendship(authStore.token, friendModal.friend.setAccepted(friendModal.action === 'add'))
            .then(() => {
                getFriendship(pagination.search, pagination.page)
                document.querySelector('#friendRequestCloseModal').click();
                setModalLoading(false);
            })
            .catch(() => {
                setModalLoading(false);
            });
    }

    const changePage = (page) => {
        if (!page) {
            return;
        }
        getFriendship(pagination.search, page);
    }

    return (
        <div>
            <h4 className="card-title mb-1">Mes demandes d'amis</h4>
            <p className="card-title-desc">
                Retrouvez toutes les personnes qui vous ont demandé en amis.
            </p>
            <div className="row mb-2">
                <div className="col-sm-10">
                    <div className="search-box me-2 mb-2 d-inline-block">
                        <div className="position-relative">
                            <input type="text" className="form-control" placeholder="Rechercher..."
                                   onChange={(e) => handleSearch(e.target.value)}/>
                            <i className="bx bx-search-alt search-icon"></i>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="text-sm-end">
                        {friendshipsLoading &&
                            <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
                        }
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
                    {friendships.map((friendship, key) => (
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
                                        <span role="button" onClick={() => setFriendModal({friend: friendships[key], action: 'add'})} data-bs-toggle="modal"
                                              data-bs-target="#friendRequestModal">
                                            <i className="bx bx-check-circle"></i>
                                        </span>
                                    </li>
                                    <li className="list-inline-item px-2">
                                        <span role="button" onClick={() => setFriendModal({friend: friendships[key], action: 'remove'})}
                                              data-bs-toggle="modal" data-bs-target="#friendRequestModal">
                                            <i className="bx bx bx-x-circle"></i>
                                        </span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                    {friendships.length === 0 && (
                        <tr>
                            <td colSpan={5}>
                                <p className="text-muted mb-0">Aucune demande d'amis trouvée</p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <Pagination page={pagination.page} totalItems={pagination.totalItems} itemsPerPage={itemsPerPage} changePage={changePage} />
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
                            <button type="button" id="friendRequestCloseModal" className="btn btn-light" data-bs-dismiss="modal">Fermer</button>
                            <button type="button" className="btn btn-primary" disabled={modalLoading} onClick={() => handleFriendship()}>
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