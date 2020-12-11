### Commands:
```
show collections
```
```
db.createCollection('stateName')
```

### Code
```
use weather

db.createCollection('temprature', { capped : true, size : 500, max : 3})

db.temprature.insert({name: "kelvin"})
WriteResult({ "nInserted" : 1 })
> db.temprature.insert({name:"ferenheit"})
WriteResult({ "nInserted" : 1 })
> db.temprature.insert({name: "celsius"})
WriteResult({ "nInserted" : 1 })

> db.temprature.find().pretty()
{ "_id" : ObjectId("5fd33b670006cfa9016fea0a"), "name" : "kelvin" }
{ "_id" : ObjectId("5fd33b6d0006cfa9016fea0b"), "name" : "ferenheit" }
{ "_id" : ObjectId("5fd33b730006cfa9016fea0c"), "name" : "celsius" }

> db.temprature.insert({name: "absolute"})
{ "_id" : ObjectId("5fd33b6d0006cfa9016fea0b"), "name" : "ferenheit" }
{ "_id" : ObjectId("5fd33b730006cfa9016fea0c"), "name" : "celsius" }
{ "_id" : ObjectId("5fd33b670006cfa9016fea0a"), "name" : "absolute" }

> db.createCollection("humidity")
{ "ok" : 1 }

> db.temprature.isCapped()
true

> db.humidity.drop()
true

> db.dropDatabase()
{ "dropped" : "weather", "ok" : 1 }
