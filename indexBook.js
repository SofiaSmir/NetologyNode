const express = require('express')
const router = express.Router()
const Book = require('../entities/book')
const {bibliotheque} = require('../bd')


router.get('/', (req,res) => {
        const {books} = bibliotheque
        res.json(books)
    })

router.get('/:id', (req,res) => {
    const {books} = bibliotheque
    const {id} = req.params
    const idx = books.findIndex(el => el.id === id)

     res.json(idx)    /// why -1?????? 
    // if(idx != -1){
    //     res.json(books[idx])
    // }else {
    //     res.status(404)
    //     res.json('error 404 || page not found')
    // }
})

router.post('/',(req,res) => {
 const {books} = bibliotheque
 const {title,description,authors} = req.body

 const newBook = new Book(title,description,authors)
 books.push(newBook)

 res.status(201).json(newBook)

})

// router.put('/:id', (req,res) => {
//     const {books} = bibliotheque
//     const {title,description,authors} = req.body
//     const {id} = req.params

//     const idx = books.findIndex(el => el.id  === id)
//     if(idx !== -1){
//         books[id] = {
//             ...books[idx],
//             title,
//             description,
//             authors
//         }

//         res.json(books[id])
//     }else {
//         res.status(404)
//         res.json('error 404 || page not found')
//     }

// })

// router.delete(':id', (req,res) => {
//    const {books} = bibliotheque
//    const {id}  = req.params
//    const idx = books.findIndex(el => el.id === id)

//    if(idx !== -1){
//     books.splice(idx,1)
//     res.json('ok')
//    }else {
//     res.status(404)
//         res.json('error 404 || page not found')
//    }

// })

module.exports = router