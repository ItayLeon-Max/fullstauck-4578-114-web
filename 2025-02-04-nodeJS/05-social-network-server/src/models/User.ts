import { DataTypes, UUID } from "sequelize";
import { AllowNull, BelongsToMany, Column, DataType, Default, HasMany, Index, Model, PrimaryKey, Table } from "sequelize-typescript";
import Post from "./post";
import Follow from "./follow";

@Table({
    underscored: true
})
export default class User extends Model {

    //id
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    //name
    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string

    //username
    @Index({unique: true})
    @AllowNull(false)
    @Column(DataType.STRING(40))
    username: string

    //password
    @AllowNull(false)
    @Column(DataType.STRING(64))
    password: string

    //HasMany Post
    @HasMany(() => Post)
    posts: Post[];

    @BelongsToMany(() => User, () => Follow, 'followeeId', 'followerId')
    followers: User[];

    @BelongsToMany(() => User, () => Follow, 'followerId', 'followeeId')
    following: User[];

}