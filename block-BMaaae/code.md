```
> use sports
switched to db sports
> show dbs
admin   0.000GB
config  0.000GB
india   0.000GB
local   0.000GB
> db
sports
> db.createCollection("cricket")
{ "ok" : 1 }
> db.createCollection("football")
{ "ok" : 1 }
> db.createCollection("TT")
{ "ok" : 1 }

> db.cricket.insert({name:"sachin",age: 40, email: "sachin@gmail.com",bid_price:300000})
WriteResult({ "nInserted" : 1 })
> db.cricket.insert({name:"kumar",age: 30, email: "kumar@gmail.com",bid_price:200000})
WriteResult({ "nInserted" : 1 })
> db.cricket.insert({name:"virat",age: 35, email: "virat@gmail.com",bid_price:400000})
WriteResult({ "nInserted" : 1 })
> db.football.insert({name:"singh",age: 28, email: "singh@gmail.com",bid_price:200000})
WriteResult({ "nInserted" : 1 })
> db.football.insert({name:"ravin",age: 26, email: "ravin@gmail.com",bid_price:100000})
WriteResult({ "nInserted" : 1 })
> db.football.insert({name:"pravin",age: 25, email: "pravin@gmail.com",bid_price:1100000})
WriteResult({ "nInserted" : 1 })
> db.TT.insert({name:"inder",age: 24, email: "inder@gmail.com",bid_price:100000})
WriteResult({ "nInserted" : 1 })
> db.TT.insert({name:"dev",age: 25, email: "dev@gmail.com",bid_price:5000000})
WriteResult({ "nInserted" : 1 })

> show collections
TT
cricket
football

> db.createCollection("khokho",{capped:true, size:500, max:3})
{ "ok" : 1 }

> db.khokho.insert({name:"ravikant"})
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"kunti"})
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"arjun"})
WriteResult({ "nInserted" : 1 })
> db.khokho.insert({name:"karn"})
WriteResult({ "nInserted" : 1 })
> db.khokho.find()
{ "_id" : ObjectId("5fd3498d7141d179f7c2089a"), "name" : "kunti" }
{ "_id" : ObjectId("5fd349957141d179f7c2089b"), "name" : "arjun" }
{ "_id" : ObjectId("5fd349a57141d179f7c2089c"), "name" : "karn" }

> db.cricket.isCapped()
false
> db.khokho.isCapped()
true

> db.football.remove({})
WriteResult({ "nRemoved" : 3 })

> db.cricket.drop()
true

> db.dropDatabase()
{ "dropped" : "sports", "ok" : 1 }

> db
sports

> use test
switched to db test

> show dbs
admin   0.000GB
config  0.000GB
india   0.000GB
local   0.000GB

```
