"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const User_1 = require("../models/User");
function updateUser(req, res) {
    if (!req.query.email) {
        res.status(400).send({
            error: 'An email must be provided',
        });
    }
    else {
        const allowedUpdates = ['name', 'surname', 'age', 'email', 'password'];
        const actualUpdates = Object.keys(req.body);
        const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
        if (!isValidUpdate) {
            res.status(400).send({
                error: 'Update is not permitted',
            });
        }
        else {
            User_1.default.findOneAndUpdate({ email: req.query.email.toString() }, req.body, {
                new: true,
                runValidators: true,
            }).then((user) => {
                if (!user) {
                    res.status(404).send();
                }
                else {
                    res.send(user);
                }
            }).catch((error) => {
                res.status(400).send(error);
            });
        }
    }
}
exports.updateUser = updateUser;
