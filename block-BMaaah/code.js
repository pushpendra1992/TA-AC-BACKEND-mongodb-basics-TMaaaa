// Part One

use blog
db.createCollection("articles")
var articles = [{
        title: 'javascript',
        details: 'A blog to know how javascript become popular',
        author: {
            name: 'kumar',
            email: 'kumar@gmail.com',
            age: 24
        },
        tags: ['js', 'mongo']
    },
    {
        title: 'html',
        details: 'Know how to use html cheat sheet',
        author: {
            name: 'singh',
            email: 'singh@gmail.com',
            age: 30
        },
        tags: ['js', 'front-end', 'html']
    },
    {
        title: 'css',
        details: 'make your web page more attractive',
        author: {
            name: 'lion',
            email: 'lion@gmail.com',
            age: 28
        },
        tags: ['js', 'mongo', 'css']
    }
]
db.articles.insert(articles)
db.articles.find().pretty()
db.articles.find({"_id": ObjectId("5fd452d7db0262bf7ecd8743")}).pretty()
db.articles.find({title: "html"}).pretty()
db.articles.find({"author.name": "kumar"}).pretty()
db.articles.find({tags: "mongo"}).pretty()
db.articles.update({"_id" : ObjectId("5fd452d7db0262bf7ecd8743")},{$set:{title:"css-styles"}})
db.articles.update({title:"css-styles"},{$set:{"author.name":"jaidev"}})
db.articles.updateMany({},{$rename:{details:"description"}})
db.articles.update({ title:"css" },{ $addToSet: { tags: "frontEnd" } })
db.articles.update({"author.name":"jaidev"},{title:"java"})
db.articles.update({title:"javascript"},{$set:{title:"Java-Script"}})
//* with $set, updates the document without deleting any other field, while witout using $set it deleted all the other fields except updated one. 
db.articles.update({title:"html"},{$inc:{"author.age":5}})
db.articles.remove({"_id" : ObjectId("5fd46c3b739b44dbad1f2f3b")})

// Part Two:

db.users.find({sports:"cricket"}).pretty()
db.users.update({name:"Steve Ortega"},{$addToSet:{sports:"golf"}})
db.users.find({$or:[{sports:"cricket"},{sports:"football"}]}).pretty()
db.users.find({name:{$regex:".*ri.*"}}).pretty()
