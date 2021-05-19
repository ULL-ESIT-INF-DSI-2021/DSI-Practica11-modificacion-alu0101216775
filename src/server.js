"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.configure();
        this.routes();
    }
    Server.prototype.configure = function () {
        // Database
        var DATABASE = 'mongodb://localhost/users';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(process.env.MONGODB_URL || DATABASE, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(function (db) { return console.log("Database connected!"); })["catch"](function (db) { return console.error("Error connecting to Database"); });
        //Port
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use(apiRoutes);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server listening on port', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
