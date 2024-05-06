//запрос(ы) для вставки

db.books.insertOne(
    {
        title: "Black House",
        description: "Novel",
        authors: "Stephen King"
    }
)

db.books.insertOne(
    {
        title: "Before the Play",
        description: "Short Story",
        authors: "Stephen King"
    }
)


//запрос для поиска полей документов коллекции books по полю title

const found = db.collection('books').find({
    title: "Black House"
})


//запрос для редактирования полей: description и authors коллекции books по _id записи

await db.collection('books').updateOne(
    {  _id: ObjectId('1111111111')},
    { $set: {
            description : "You don't know JS",
            authors: "Kyle Simpson"
        } 
    }
)
