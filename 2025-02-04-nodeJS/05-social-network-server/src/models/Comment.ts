import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Post from './post';
import User from './user';

@Table({
    underscored: true
})
export default class Comment extends Model {

    //id
    @PrimaryKey
    @Default(DataType.UUID)
    @Column(DataType.UUID)
    id: string

    //postId
    @ForeignKey(() => Post)
    @Column(DataType.UUID)
    postId: string

    @BelongsTo(() => Post, { foreignKey: 'postId' })
    post: Post;

    //userId
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string

    @BelongsTo(() => User, { foreignKey: 'userId' })
    user: User;

    //body
    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

}