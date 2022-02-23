import axios from "axios";
import Token from "../entity/Token";
import User from "../entity/User";
import authHeader from "../utils/auth.header";

class AuthService {
    login(email, password) {
        return axios.post(process.env.REACT_APP_API_URL + '/login', {
            username: email,
            password: password
        }).then(response => {
            let token = new Token();
            token.deserialize(response.data);
            return token;
        });
    }

    logout() {
        localStorage.removeItem(process.env.REACT_APP_USER_KEY_STORAGE);
    }

    register(lastname, firstname, email, password) {
        return axios.post(process.env.REACT_APP_API_URL + '/users', {
            lastname: lastname,
            firstname: firstname,
            email: email,
            password: password,
            userFrom: 'app'
        }).then(response => {
            return new User(
                response.data.id,
                response.data.firstname,
                response.data.lastname,
                response.data.email,
                new Date(response.data.createdAt),
                new Date(response.data.updatedAt)
            );
        });
    }

    me(token = null) {
        return axios.get(process.env.REACT_APP_API_URL + '/me', {
            headers: authHeader(token)
        }).then(response => {
            return new User(
                response.data.id,
                response.data.firstname,
                response.data.lastname,
                response.data.email,
                new Date(response.data.createdAt),
                new Date(response.data.updatedAt)
                //toLocaleDateString
            );
        });
    }

    storeUser(token, user) {
        let storage = {user: user, token: token}
        localStorage.setItem(process.env.REACT_APP_USER_KEY_STORAGE, JSON.stringify(storage));
    }

    getCurrentUser() {
        const storage = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_KEY_STORAGE));
        return storage.user;
    }
}

export default new AuthService();