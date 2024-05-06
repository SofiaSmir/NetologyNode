const User = require('./entities/user')
const Book = require('./entities/book')


const users = {
    userList : [new User("text@mail.ya"), new User("helloWorld@.ya")]
}

const bibliotheque = {
    books : [new Book("one","one","one"), new Book("two","two","two")]
}

module.exports = {users, bibliotheque}