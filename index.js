const express = require('express')
const {v4: uuid} = require('uuid')
const bodyParser = require('body-parser')

class Book {
     constructor(
        title = "", 
        description = "",
        authors = "",
        favorite = "",
        fileCover = "",
        fileName = "", 
        id =uuid(),

    ) {
        this.title = title 
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
        this.id = id
     }
} 

const bibliotheque = {
    books : [new Book("one","one","one"), new Book("two","two","two")]
}
class User {
    constructor(mail = "",id = uuid()){
       this.mail = mail,
        this.id = id
    }
}
const users = {
    userList : []
}

const app = express()
app.use(bodyParser.json())


app.post('/api/user/login/', (req,res) => {
    const {userList} = users
    const {mail} = req.body

    const newUser = new User(mail)
    userList.push(newUser)

    res.status(201).json(newUser)

})

app.get('/api/users/',(req,res) => {
    const {userList} = users
    res.json(userList)
})

app.get('/api/books', (req,res) => {
    const {books} = bibliotheque
    res.json(books)
})

app.get('/api/books/:id', (req,res) => {
    const {books}= bibliotheque
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

    if(idx != -1){
        res.json(books[idx])
    }else {
        res.status(404)
        res.json('error 404 || page not found')
    }
})

app.post('/api/books/',(req,res) => {
 const {books} = bibliotheque
 const {title,description,authors} = req.body

 const newBook = new Book(title,description,authors)
 books.push(newBook)

 res.status(201).json(newBook)

})

app.put('/api/books/:id', (req,res) => {
    const {books} = bibliotheque
    const {title,description,authors} = req.body
    const {id} = req.params

    const idx = books.findIndex(el => el.id  === id)
    if(idx !== -1){
        books[id] = {
            ...books[idx],
            title,
            description,
            authors
        }

        res.json(books[id])
    }else {
        res.status(404)
        res.json('error 404 || page not found')
    }

})

app.delete('/api/books/:id', (req,res) => {
   const {books} = bibliotheque
   const {id}  = req.params
   const idx = books.findIndex(el => el.id === id)

   if(idx !== -1){
    books.splice(idx,1)
    res.json('ok')
   }else {
    res.status(404)
        res.json('error 404 || page not found')
   }

})

const PORT = process.env.PORT || 3000
app.listen(PORT)