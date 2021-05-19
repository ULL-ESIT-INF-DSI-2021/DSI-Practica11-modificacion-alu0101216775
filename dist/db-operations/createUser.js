"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../models/User");
function createUser(req, res) {
    const user = new User_1.default(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    });
}
exports.createUser = createUser;
