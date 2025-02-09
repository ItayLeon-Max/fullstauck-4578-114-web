import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import User from './user';

@Table({
    underscored: true
})  
export default class Follow extends Model {

    //followerId
    @ForeignKey(() => User)
    @PrimaryKey
    @Column(DataType.UUID)
    followerId: string

    //followeeId
    @ForeignKey(() => User)
    @PrimaryKey
    @Column(DataType.UUID)
    followeeId: string

}