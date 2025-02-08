import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import User from './User';

@Table({
    underscored: true,
    timestamps: false
})  
export default class Follows extends Model {

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    follower_id: string

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    followee_id: string

}