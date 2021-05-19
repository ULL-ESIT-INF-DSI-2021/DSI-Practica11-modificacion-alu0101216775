import {Request, Response, Router} from 'express'
import createUser from '../db-operations/createUser'

class ApiRoutes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', getIngredients);
        this.router.post('/', postIngredient);
        this.router.put('/', putIngredient);
        this.router.delete('/', deleteIngredient);
    }
}

const apiRoutes = new ApiRoutes();
apiRoutes.routes();
export default apiRoutes.router;