import {Request, Response, Router} from 'express'

import User from '../models/User'

export function deleteUser(req: Request, res: Response) {
    if(!req.query.email) {
        res.status(400).send({
            error: 'An email must be provided',
        });
    } else {
        User.findOneAndDelete({email: req.query.email.toString()}).then((user) => {
            if(!user) {
                res.status(404).send();
            } else {
                res.send(user);
            }
        }).catch(() => {
            res.status(400).send();
        })
    }
}