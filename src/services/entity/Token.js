class Token {

    static JWT_STORAGE_KEY = 'STOKE_DRIVE_JWT_TOKEN';

    constructor(token) {
        this.token = token;
        this.expirationAt = 0;
        this.createdAt = 0;
    }

    deserialize() {
        let token = JSON.parse(atob(this.token.split('.')[1]));
        this.expirationAt = token.exp;
        this.createdAt = token.iat;
    }

    save() {
        window.localStorage.setItem(Token.JWT_STORAGE_KEY, JSON.stringify(this));
    }
}

export default Token;