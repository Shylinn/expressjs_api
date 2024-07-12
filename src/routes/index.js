// const express = require('express');
import express from 'express'
const userRouters = require('./user.route')
const loginRouters = require('./login.route')
const getUserRouters = require('./user')
import { badRequests } from '../middlewares/error_handling'
const routes = express.Router();
routes.use('/api/v1/user/register', userRouters);
routes.use('/api/v1/user/login', loginRouters);
routes.use('/api/v1/user/all', getUserRouters);
routes.use(badRequests)
module.exports = routes;