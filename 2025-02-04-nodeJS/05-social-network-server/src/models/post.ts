import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './user';
import Comment from './comment';

@Table({
    underscored: true
})
export default class Post extends Model {

    //id
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //userId
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string

    //title
    @AllowNull(false)
    @Column(DataType.STRING(40))
    title: string

    //body
    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    //imageUrl
    @AllowNull(true)
    @Column(DataType.STRING(255))
    imageUrl: string

    @BelongsTo(() => User)
    user: User;

    //HasMany Comment
    @HasMany(() => Comment)
    comments: Comment[];
}