// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  db.collection('Users').deleteMany({
    name: 'Warrior'
  }).then((result) => {
    console.log(result.result);
  });

  // deleteOne
  /*
  db.collection('Users').deleteOne({
    _id: new ObjectID("5947f0c44a994f257c177fff")
  }).then((result) => {
    console.log(result.result);
  });
  // findOneAndDelete
  /*
  db.collection('Todos').findOneAndDelete({
    text: "You\'ll never delete me!"
  }).then((result) => {
    console.log(result);
  });
  */
  // db.close();
});
