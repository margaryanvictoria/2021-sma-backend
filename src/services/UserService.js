class User {
    constructor() {
        this.id = "";
        this.username = "";
        this.email = "";
        this.fName = "";
        this.lName = "";
    }
}

class UserDTO {
    constructor() {
        this.username = "";
        this.email = "";
        this.fName = "";
        this.lName = "";
    }
}

class UserService {
    constructor() { }

    /**
     * @param {UserDTO} userDTO
     * @returns {Promise<User>}
     */
    createUser(userDTO) { }
    
    /**
     * TODO: THIS REQUIRES A TOKEN (JWT), SEVERE SECURITY RISK
     * @param {string} id
     */
    getUser(id) { }

    /**
     * TODO: THIS REQUIRES A TOKEN (JWT), SEVERE SECURITY RISK
     * @param {string} id
     * @param {UserDTO} userDTO
     * @returns {Promise<User>}
     */
    updateUser(id, userDTO) { }
    
    /**
     * TODO: THIS REQUIRES A TOKEN (JWT), SEVERE SECURITY RISK
     * @param {string} id
     * @returns {boolean}
     */
    deleteUser(id) { }
}

module.exports = {
    UserService,
    User,
    UserDTO
}