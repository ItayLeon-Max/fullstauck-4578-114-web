import express, { json } from 'express';
import config from 'config'
import sequelize from './db/sequelize';
import profileRouter from './routers/profile';
import errorLogger from './middlewares/error/error-logger';
import errorResponder from './middlewares/error/error-responder';
import notFound from './middlewares/not-found';


const PORT = config.get<string>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const app = express();

(async () => {
    await sequelize.sync({ force });

    //middlewares
    app.use(json());

    app.use('/profile', profileRouter);

    // special not-found middleware
    app.use(notFound);

    // Error handling middleware
    app.use(errorLogger);
    app.use(errorResponder);

    app.listen(PORT, ()=> console.log(`${name} Server is running on port ${PORT}`));
})();
