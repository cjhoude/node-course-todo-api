var mongoose = require('mongoose'); // the original unmodified mongoose library

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

module.exports = {User};
