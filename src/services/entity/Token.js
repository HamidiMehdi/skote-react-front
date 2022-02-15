class Token {

    static JWT_STORAGE_KEY = 'SKOTE_DRIVE_JWT_TOKEN';
    static USER_STORAGE_KEY = 'SKOTE_DRIVE_USER_SESSION';

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
        localStorage.setItem(Token.JWT_STORAGE_KEY, JSON.stringify(this));
    }
}

export default Token;