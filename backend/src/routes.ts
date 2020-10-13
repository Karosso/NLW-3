import { Router } from 'express';
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', orphanagesController.create);

export default routes;