// const express = require('express');
import express from 'express';
import * as controllers from '../controllers'
import { validate } from '../middlewares/validateMiddleware'
import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
const routes = express.Router();
routes.post('/', validate(userSchema), controllers.login)

module.exports = routes;