import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize";
import profileRouter from "./routers/profile";
import followsRouter from "./routers/follows";
import commentsRouter from "./routers/comments";
import feedRouter from "./routers/feed";
import errorLogger from "./middlewares/error/error-logger";
import errorResponder from "./middlewares/error/error-responder";
import notFound from "./middlewares/not-found";
import authRouter from "./routers/auth";
import authenticate from "./middlewares/auth";
import requireAuth from "./middlewares/require-auth";

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
    await sequelize.sync({ force });

    app.use(json());

    app.use((req, res, next) => {
        if (!req.path.startsWith('/auth')) {
            authenticate(req, res, next);
        } else {
            next();
        }
    });

    app.use("/profile", requireAuth, profileRouter);
    app.use("/follows", requireAuth, followsRouter);
    app.use("/comments", requireAuth, commentsRouter);
    app.use("/feed", requireAuth, feedRouter);  

    app.use("/auth", authRouter);

    app.use(notFound);
    app.use(errorLogger);
    app.use(errorResponder);

    app.listen(port, () => console.log(`${name} started on port ${port}...`));
})();