var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {
        type: String, 
        required: true,
        maxLength: 100,
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 100,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Enter a valid email address'],
    },
    password: {
        type: String, 
        required: true,
        maxLength: 100,
    },
  }
);

module.exports = mongoose.model('User', UserSchema);
