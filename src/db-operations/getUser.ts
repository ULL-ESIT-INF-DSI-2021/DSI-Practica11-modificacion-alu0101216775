import {Request, Response, Router} from 'express'

import User from '../models/User'

export function getUser(req: Request, res: Response) {
    const filter = req.query.email?{email: req.query.email.toString()}:{};

  User.find(filter).then((user) => {
    if (user.length !== 0) {
      res.send(user);
    } else {
      res.status(404).send();
    }
  }).catch(() => {
    res.status(500).send();
  });
}