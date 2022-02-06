import ServerEnum from "../enum/ServerEnum";
import User from "../entity/User";
import Token from "../entity/Token";

class UserModel {
    getCurrentUser() {
        let token = JSON.parse(window.localStorage.getItem(Token.JWT_STORAGE_KEY));
        return fetch(ServerEnum.HOST + '/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token.token
            }
        })
            .then(response => response.json())
            .then(response => {
                return new User(
                    response.id,
                    response.firstname,
                    response.lastname,
                    response.email,
                    new Date(response.createdAt),
                    new Date(response.updatedAt)
                    //toLocaleDateString
                );
            });
    }
}

export default UserModel;