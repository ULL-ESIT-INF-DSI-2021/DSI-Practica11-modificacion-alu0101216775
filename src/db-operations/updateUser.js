"use strict";
exports.__esModule = true;
exports.updateUser = void 0;
var User_1 = require("../models/User");
function updateUser(req, res) {
    if (!req.query.email) {
        res.status(400).send({
            error: 'An email must be provided'
        });
    }
    else {
        var allowedUpdates_1 = ['name', 'surname', 'age', 'email', 'password'];
        var actualUpdates = Object.keys(req.body);
        var isValidUpdate = actualUpdates.every(function (update) { return allowedUpdates_1.includes(update); });
        if (!isValidUpdate) {
            res.status(400).send({
                error: 'Update is not permitted'
            });
        }
        else {
            User_1["default"].findOneAndUpdate({ email: req.query.email.toString() }, req.body, {
                "new": true,
                runValidators: true
            }).then(function (user) {
                if (!user) {
                    res.status(404).send();
                }
                else {
                    res.send(user);
                }
            })["catch"](function (error) {
                res.status(400).send(error);
            });
        }
    }
}
exports.updateUser = updateUser;
