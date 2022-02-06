class User {
    constructor(id = null, firstname = null, lastname = null, email = null, createdAt = null, updatedAt = null) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    }

    deserialize() {
        return JSON.stringify(this);
    }
}

export default User;
