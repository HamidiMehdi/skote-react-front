class Friendship {
    constructor(id = null, user = null, friend = null, accepted = null, createdAt = null, updatedAt = null) {
        this.id = id;
        this.user = user;
        this.friend = friend;
        this.accepted = accepted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    setAccepted(accepted) {
        this.accepted = accepted;
        return this;
    }
}

export default Friendship;