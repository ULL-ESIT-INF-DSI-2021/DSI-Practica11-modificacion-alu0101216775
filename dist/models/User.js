"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: (value) => {
            if (!(value.includes('@') || value.includes('.'))) {
                throw new Error('That is not a valid email');
            }
        }
    },
    name: {
        type: String,
        required: true,
        validate: (value) => {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Name should only contain letters');
            }
        },
    },
    surname: {
        type: String,
        required: true,
        validate: (value) => {
            if (!value.match(/^[A-Za-z ]+$/)) {
                throw new Error('Surname should only contain letters');
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate: (value) => {
            if (value.length < 8) {
                throw new Error('Password is too short!');
            }
        },
    },
    age: {
        type: Number,
        validate: (value) => {
            if (value < 0) {
                throw new Error('Age should be a natural number');
            }
        },
    }
});
const User = mongoose.model('User', UserSchema);
exports.default = User;
