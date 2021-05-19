"use strict";
exports.__esModule = true;
var express_1 = require("express");
var createUser_1 = require("../db-operations/createUser");
var deleteUser_1 = require("../db-operations/deleteUser");
var getUser_1 = require("../db-operations/getUser");
var updateUser_1 = require("../db-operations/updateUser");
var ApiRoutes = /** @class */ (function () {
    function ApiRoutes() {
        this.router = express_1.Router();
        this.routes();
    }
    ApiRoutes.prototype.routes = function () {
        this.router.get('/', getUser_1.getUser);
        this.router.post('/', createUser_1.createUser);
        this.router.put('/', updateUser_1.updateUser);
        this.router["delete"]('/', deleteUser_1.deleteUser);
    };
    return ApiRoutes;
}());
var apiRoutes = new ApiRoutes();
apiRoutes.routes();
exports["default"] = apiRoutes.router;
