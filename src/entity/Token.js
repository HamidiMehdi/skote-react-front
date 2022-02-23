class Token {
    constructor() {
        this.token = null;
        this.refreshToken = null
        this.expirationAt = 0;
        this.createdAt = 0;
    }

    deserialize(tokens) {
        this.token = tokens.token;
        this.refreshToken = tokens.refresh_token;

        let token = JSON.parse(atob(tokens.token.split('.')[1]));
        this.expirationAt = token.exp;
        this.createdAt = token.iat;
    }
}

export default Token;