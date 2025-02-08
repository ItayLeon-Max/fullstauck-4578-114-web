import { AllowNull, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './User';

@Table({
    underscored: true
})
export default class Post extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.UUID)
    user_id: string

    @AllowNull(false)
    @Column(DataType.STRING(255))
    title: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string
}