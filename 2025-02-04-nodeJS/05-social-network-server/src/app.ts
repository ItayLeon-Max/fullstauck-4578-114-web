import express, { json } from 'express';
import config from 'config'
import sequelize from './db/sequelize';
import profileRouter from './routers/profile';
import errorLogger from './middlewares/error/error-logger';
import errorResponder from './middlewares/error/error-responder';
import notFound from './middlewares/not-found';
import commentsRouter from './routers/comments';
import followsRouter from './routers/follows';
import feedRouter from './routers/feed';


const PORT = config.get<string>('app.port');
const name = config.get<string>('app.name');
const force = config.get<boolean>('sequelize.sync.force')

const app = express();

(async () => {
    await sequelize.sync({ force });

    //middlewares
    app.use(json());

    app.use('/profile', profileRouter);
    app.use('/comments', commentsRouter);
    app.use('/follows', followsRouter);
    app.use('/feed', feedRouter);

    // special not-found middleware
    app.use(notFound);

    // Error handling middleware
    app.use(errorLogger);
    app.use(errorResponder);

    app.listen(PORT, ()=> console.log(`${name} Server is running on port ${PORT}`));
})();
