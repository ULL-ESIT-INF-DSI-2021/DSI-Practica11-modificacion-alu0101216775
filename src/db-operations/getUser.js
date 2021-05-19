"use strict";
exports.__esModule = true;
exports.getUser = void 0;
var User_1 = require("../models/User");
function getUser(req, res) {
    var filter = req.query.email ? { email: req.query.email.toString() } : {};
    User_1["default"].find(filter).then(function (user) {
        if (user.length !== 0) {
            res.send(user);
        }
        else {
            res.status(404).send();
        }
    })["catch"](function () {
        res.status(500).send();
    });
}
exports.getUser = getUser;
