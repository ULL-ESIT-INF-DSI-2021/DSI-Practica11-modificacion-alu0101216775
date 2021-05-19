"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = require("../db-operations/createUser");
const deleteUser_1 = require("../db-operations/deleteUser");
const getUser_1 = require("../db-operations/getUser");
const updateUser_1 = require("../db-operations/updateUser");
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', getUser_1.getUser);
        this.router.post('/', createUser_1.createUser);
        this.router.put('/', updateUser_1.updateUser);
        this.router.delete('/', deleteUser_1.deleteUser);
    }
}
const apiRoutes = new ApiRoutes();
apiRoutes.routes();
exports.default = apiRoutes.router;
