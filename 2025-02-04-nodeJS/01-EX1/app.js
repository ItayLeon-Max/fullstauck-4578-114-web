'use strict';

const express = require('express');
const axios = require('axios');
const { toXML } = require('jstoxml');

const app = express();
const PORT = 3000;


const getUsers = async (req, res, next) => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    req.data = response.data
    next()
}

const filterData = (req, res, next) => {
    if (req.query.search) {
        req.data = req.data.filter(({name}) => name.includes(req.query.search))
    }
    next()
}

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'text/xml')
        return res.send(toXML(req.data))
    } 
    res.json(req.data)
}

app.get('/users', getUsers, filterData, respond);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});