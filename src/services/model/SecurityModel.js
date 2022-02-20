import ServerEnum from "../enum/ServerEnum";
import Token from "../entity/Token";
import User from "../entity/User";

class SecurityModel {
    authentication(email, password) {
        let body = {username: email, password: password};
        return fetch(ServerEnum.HOST + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(response => {
                let jwt = new Token(response.token)
                jwt.deserialize();
                jwt.save();
            });
    }

    register(lastname, firstname, email, password) {
        let body = {lastname: lastname, firstname: firstname, email: email, password: password, userFrom: 'app'};
        return fetch(ServerEnum.HOST + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
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
                );
            });
    }
}

export default SecurityModel;