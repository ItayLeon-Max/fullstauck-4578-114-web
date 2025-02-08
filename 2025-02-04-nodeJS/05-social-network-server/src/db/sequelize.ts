import { Sequelize } from "sequelize-typescript";
import User from "../models/User";
import config from 'config'
import Post from "../models/Post";
import Comment from "../models/Comment";
import Follows from "../models/Follows";

const sequelize = new Sequelize({
    models: [
         User,
         Post, 
         Comment, 
         Follows 
        ],
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize;