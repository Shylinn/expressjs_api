// const express = require('express');
import express from 'express';
import cors from 'cors'
const app = express();
const route = require('./src/routes')

require('dotenv').config()
require('./connection')
//set middleware chỉ cho phép link client URL call API vào server và chỉ cho phép các phương thức sau đây call
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],

}))
//đọc dữ liệu từ client gửi lên khi gủi cùng pt post/put ==> chuyển từ json => javascript object ==> res.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/', route);
const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, () => {
    console.log(`Serrver is running at ` + listener.address().port);
})
