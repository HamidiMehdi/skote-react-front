import axios from "axios";
import User from "../../entity/User";
import authHeader from "../utils/auth.header";

class AuthApi {
    login(email, password) {
        return axios.post(process.env.REACT_APP_API_URL + '/login', {
            username: email,
            password: password
        }).then(response => {
            return response.data;
        });
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
}

export default new AuthApi();