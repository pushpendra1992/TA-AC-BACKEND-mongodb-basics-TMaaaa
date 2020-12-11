```
> use mountains
switched to db mountains

> db.createCollection("himalyas")
{ "ok" : 1 }

> db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'})
WriteResult({ "nInserted" : 1 })

> db.himalayas.insertMany( [{
... ... name:"Yamnotri",
... ... height: "6381 mtrs"
... ... },
... ... {
... ... name:"Gangotri",
... ... height:"6400 mtrs"
... ... },
... ... {name:"Mana Peak",
... ... height:"6561 mtrs"
... ... },
... ... {
... ... name:"Mount Kailash",
... ... height:"6638 mtrs"
... ... }]
... )
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5fd363769e1031a952f1d2ca"),
		ObjectId("5fd363769e1031a952f1d2cb"),
		ObjectId("5fd363769e1031a952f1d2cc"),
		ObjectId("5fd363769e1031a952f1d2cd")
	]
}

> db.himalayas.find({})
{ "_id" : ObjectId("5fd35fcd9e1031a952f1d2c9"), "name" : "Dhauldhar range", "height" : "4000 mtrs" }
{ "_id" : ObjectId("5fd363769e1031a952f1d2ca"), "name" : "Yamnotri", "height" : "6381 mtrs" }
{ "_id" : ObjectId("5fd363769e1031a952f1d2cb"), "name" : "Gangotri", "height" : "6400 mtrs" }
{ "_id" : ObjectId("5fd363769e1031a952f1d2cc"), "name" : "Mana Peak", "height" : "6561 mtrs" }
{ "_id" : ObjectId("5fd363769e1031a952f1d2cd"), "name" : "Mount Kailash", "height" : "6638 mtrs" }

> db.himalayas.find({name:"Gangotri"})
{ "_id" : ObjectId("5fd363769e1031a952f1d2cb"), "name" : "Gangotri", "height" : "6400 mtrs" }
```
