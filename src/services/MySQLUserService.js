const UserService = require("./UserService")

class MySQLUserService extends UserService.UserService {
    /**
     * TODO: THIS REQUIRES A TOKEN (JWT), SEVERE SECURITY RISK
     * @param {string} id
     */
    getUser(id) {
        this.connection.query({
            sql: "SELECT * FROM users WHERE id=?",
            values: id
        }, (err, results, fields) => {

        })
    }
}

module.exports = MySQLUserService;