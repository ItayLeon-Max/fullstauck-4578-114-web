const express = require('express');
const port = 3000;

const user = {
    name: 'John Doe',
    age: 25
}

// Middleware is any function that has access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
const logRequest = (req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
}

const connectToMysql = (req, res, next) => {
    console.log(`Connected to MySQL database`);
    next();
}

const disConnectFromMysql = (req, res, next) => {
    console.log(`Disconnected from MySQL database`);
    next();
}

const connectToMongoDB = (req, res, next) => {
    console.log(`Connected to MongoDB database`);
    next();
}

const disConnectFromMongoDB = (req, res, next) => {
    console.log(`Disconnected from MongoDB database`);
    next();
}

const printUser = (req, res, next) => {
    res.json(user); // after closing the response, the next middleware will not be executed
}

const saveUser = (req, res, next) => {
    console.log(`User saved to database`);
    res.status(201);
    res.send('User saved to database');
}

const notFound = (req, res, next) => {
    res.status(404);
    res.send('Not found');
}

const app = express();

app.use(logRequest);

// /user
app.use('/user', connectToMysql);
app.get('/user', printUser);
app.post('/user', saveUser);
app.use('/user', disConnectFromMysql);

// /list
app.use('/list', connectToMongoDB);
app.use('/list', disConnectFromMongoDB);

app.use(notFound);


app.listen(port, () => {console.log('Server is running on port 3000');})

