"use strict";
exports.__esModule = true;
exports.createUser = void 0;
var User_1 = require("../models/User");
function createUser(req, res) {
    var user = new User_1["default"](req.body);
    user.save().then(function (user) {
        res.status(201).send(user);
    })["catch"](function (error) {
        res.status(400).send(error);
    });
}
exports.createUser = createUser;
