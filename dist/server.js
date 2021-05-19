"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const index_routes_1 = require("./routes/index.routes");
class Server {
    constructor() {
        this.app = express();
        this.configure();
        this.routes();
    }
    configure() {
        // Database
        const DATABASE = 'mongodb://localhost/users';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(process.env.MONGODB_URL || DATABASE, {
            useNewUrlParser: true,
            useCreateIndex: true
        }).then(db => console.log("Database connected!"))
            .catch(db => console.error("Error connecting to Database"));
        //Port
        this.app.set('port', process.env.PORT || 3000);
        //Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(index_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
