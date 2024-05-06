const {v4: uuid} = require('uuid')

module.exports = class User {
    constructor(mail = "",id = uuid()){
       this.mail = mail,
        this.id = id
    }
}
