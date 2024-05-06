const express = require('express')
const router = express.Router()
const User = require('../entities/user')
const {users} = require('../bd')


router.post('/', (req,res) => {
    const {userList} = users
    const {mail} = req.body
    const newUser = new User(mail)
    userList.push(newUser)

    res.status(201).json(newUser)

})  

router.get('/',(req,res) => {
    const {userList} = users
    res.json(userList)
})


module.exports = router