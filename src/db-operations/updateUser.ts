import {Request, Response, Router} from 'express'

import User from '../models/User'

export function updateUser(req: Request, res: Response) {
    if (!req.query.email) {
        res.status(400).send({
          error: 'An email must be provided',
        });
      } else {
        const allowedUpdates = ['name', 'surname', 'age', 'email', 'password'];
        const actualUpdates = Object.keys(req.body);
        const isValidUpdate =
          actualUpdates.every((update) => allowedUpdates.includes(update));
    
        if (!isValidUpdate) {
          res.status(400).send({
            error: 'Update is not permitted',
          });
        } else {
          User.findOneAndUpdate({email: req.query.email.toString()}, req.body, {
            new: true,
            runValidators: true,
          }).then((user) => {
            if (!user) {
              res.status(404).send();
            } else {
              res.send(user);
            }
          }).catch((error) => {
            res.status(400).send(error);
          });
        }
      }
}