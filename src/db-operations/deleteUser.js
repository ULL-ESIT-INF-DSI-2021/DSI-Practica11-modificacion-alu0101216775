"use strict";
exports.__esModule = true;
exports.deleteUser = void 0;
var User_1 = require("../models/User");
function deleteUser(req, res) {
    if (!req.query.email) {
        res.status(400).send({
            error: 'An email must be provided'
        });
    }
    else {
        User_1["default"].findOneAndDelete({ email: req.query.email.toString() }).then(function (user) {
            if (!user) {
                res.status(404).send();
            }
            else {
                res.send(user);
            }
        })["catch"](function () {
            res.status(400).send();
        });
    }
}
exports.deleteUser = deleteUser;
