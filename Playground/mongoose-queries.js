const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "69493597aea0074329682677";
var userID = "594913bf397e429a148255e8";


// various methods on mongoose models
/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
}).catch((e) => {
  console.log(e);
});


Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
}).catch((e) => {
  console.log(e);
});
*/

/*
Todo.findById(id).then((todo) => {
  if (!todo) { // see if todo is a falsy value
    return console.log('Id not found');
  }
  console.log('Todo', todo);
}).catch((e) => {
  console.log(e);
});
*/
if (!ObjectID.isValid(userID)) {
  console.log('User ID not valid!!!');
}

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User ID not found!');
  }
  console.log('User', user);
}).catch((e) => {
  console.log(e);
});
