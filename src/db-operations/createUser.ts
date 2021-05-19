import * as express from 'express'
import * as mongoose from 'mongoose'
import {Request, Response, Router} from 'express'

import User from '../models/User'

export function createUser(req: Request, res: Response) {
    const user = new User(req.body);
    user.save().then((user) => {
        res.status(201).send(user);
    }).catch((error: Error) => {
        res.status(400).send(error);
    });
}