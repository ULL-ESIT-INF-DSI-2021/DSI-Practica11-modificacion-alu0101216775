"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const User_1 = require("../models/User");
function getUser(req, res) {
    const filter = req.query.email ? { email: req.query.email.toString() } : {};
    User_1.default.find(filter).then((user) => {
        if (user.length !== 0) {
            res.send(user);
        }
        else {
            res.status(404).send();
        }
    }).catch(() => {
        res.status(500).send();
    });
}
exports.getUser = getUser;
