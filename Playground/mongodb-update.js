// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59480ca5e8488f269553be83")
  }, {
    $set: { // mongodb update operator
      name: 'Ultimate Warrior'
    },
    $inc: {
      age: 1 
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
