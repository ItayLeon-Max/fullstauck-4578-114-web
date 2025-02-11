import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Post from './post';
import User from './user';

@Table({
    underscored: true
})
export default class Comment extends Model {

    //id
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //postId
    @ForeignKey(() => Post)
    @AllowNull(false)
    @Column(DataType.UUID)
    postId: string

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string

    //body
    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    @BelongsTo(() => Post)
    post: Post;

    @BelongsTo(() => User)
    user: User;
}