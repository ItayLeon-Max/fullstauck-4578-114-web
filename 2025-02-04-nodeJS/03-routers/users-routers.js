const express = require('express');

const useRouter = express.Router();

app.use('/user', useRouter);
useRouter.use(connectToMysql);
useRouter.get('/', printUser);
useRouter.post('/', saveUser);
useRouter.use(disConnectFromMysql);

module.exports = {
    useRouter
}