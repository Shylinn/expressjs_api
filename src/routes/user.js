import express from 'express';
import * as controllers from '../controllers'
const routes = express.Router();
routes.get('/', controllers.getUser)

module.exports = routes;