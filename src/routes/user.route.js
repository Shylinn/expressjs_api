// const express = require('express');
import express from 'express';
import * as auth from '../controllers'
const routes = express.Router();
routes.post('/', auth.register)

module.exports = routes;