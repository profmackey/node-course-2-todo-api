const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then ((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({completed: true}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('591c5e95a2fedda6443f81e3').then((todo) => {
//   console.log(todo);
// });
