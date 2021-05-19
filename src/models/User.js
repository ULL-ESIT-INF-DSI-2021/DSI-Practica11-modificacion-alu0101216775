"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: function (value) {
            if (!(value.includes('@') || value.includes('.'))) {
                throw new Error('That is not a valid email');
            }
        }
    },
    name: {
        type: String,
        required: true,
        validate: function (value) {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Name should only contain letters');
            }
        }
    },
    surname: {
        type: String,
        required: true,
        validate: function (value) {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Surname should only contain letters');
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate: function (value) {
            if (value.length < 8) {
                throw new Error('Password is too short!');
            }
        }
    },
    age: {
        type: Number,
        validate: function (value) {
            if (value < 0) {
                throw new Error('Age should be a natural number');
            }
        }
    }
});
var User = mongoose.model('User', UserSchema);
exports["default"] = User;
