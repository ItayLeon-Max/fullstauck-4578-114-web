import { AllowNull, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Post from './Post';
import User from './User';

@Table({
    underscored: true
})
export default class Comment extends Model {

    @PrimaryKey
    @Default(DataType.UUID)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Post)
    @Column(DataType.UUID)
    post_id: string

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    user_id: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

}