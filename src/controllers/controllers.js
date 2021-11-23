const express = require('express');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const app = express();

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get('/init', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS nb_load(id int AUTO_INCREMENT, log_time DATETIME, PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
});

app.post('/reload',(req, res) => {

    const sqlQuery = 'INSERT INTO emails SET ?';

    database.query(sqlQuery,  Date.getTime() , (err, row) => {
        if (err) throw err;
    
                    res.send('hit reload loged successfully!');
                });


});

app.get('/', (req, res) => {
    const sqlQuery = 'SELECT * FROM nb_load';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'nb_load': result });
    });
});

  
        
