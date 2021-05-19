import {Request, Response, Router} from 'express'
import {createUser} from '../db-operations/createUser'
import {deleteUser} from '../db-operations/deleteUser'
import {getUser} from '../db-operations/getUser'
import {updateUser} from '../db-operations/updateUser'

class ApiRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', getUser);
        this.router.post('/', createUser);
        this.router.put('/', updateUser);
        this.router.delete('/', deleteUser);
    }
}

const apiRoutes = new ApiRoutes();
apiRoutes.routes();
export default apiRoutes.router;