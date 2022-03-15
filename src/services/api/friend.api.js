import axios from "axios";
import authHeader from "../utils/auth.header";
import Friendship from "../../entity/Friendship";
import User from "../../entity/User";

class FriendApi {
    getCollection(token, id, itemsPerPage, search = '', page = 1) {
        return axios.get(process.env.REACT_APP_API_URL + '/friendships', {
            headers: authHeader(token),
            params: {
                "page": page,
                "friend": id,
                'or[user.firstname,user.lastname]': search.trim(),
                "exists[accepted]": 0,
                'order[createdAt]': 'DESC',
                'itemsPerPage': itemsPerPage
            }
        }).then(response => {
            return {
                items: response.data['hydra:member'].map(request => {
                    return new Friendship(
                        request.id,
                        new User(request.user.id, request.user.firstname, request.user.lastname),
                        new User(request.friend.id, request.friend.firstname, request.friend.lastname),
                        request.accepted,
                        new Date(request.createdAt),
                        new Date(request.createdAt)
                    );
                }),
                totalItems: response.data['hydra:totalItems']
            };
        });
    }

    acceptRejectFriendship(token, friendship) {
        return axios.patch(process.env.REACT_APP_API_URL + '/friendships/' + friendship.id,
            {accepted: friendship.accepted},
            {headers: authHeader(token, 'application/merge-patch+json')}
        ).then(response => response.data);
    }
}

export default new FriendApi();