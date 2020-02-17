const express =require('express');
const body_parser = require('body-parser');
const mysql = require('mysql');
const userRoutes = require('./routes/user');

const app = express();
app.use(body_parser.json());
app.use(userRoutes);


app.listen(3000);