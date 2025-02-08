import express from 'express';
import config from 'config'
import sequelize from './db/sequelize';


const PORT = config.get<string>('app.port');
const name = config.get<string>('app.name');

const app = express();

sequelize.sync()


app.listen(PORT, ()=> console.log(`${name} Server is running on port ${PORT}`));