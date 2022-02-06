import ServerEnum from "../enum/ServerEnum";
import Token from "../entity/Token";

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

    register(firstname, lastname, email, password) {
        return '';
    }
}

export default SecurityModel;