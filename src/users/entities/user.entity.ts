import { Entity, Column } from "typeorm";
import {BaseEntity} from '../../config/base.entity'
import { IUser } from "src/interfaces/user.interface";

@Entity({name: 'Answer'})
export class UserEntity extends BaseEntity implements IUser {

  @Column({ length: 255, nullable: false })
  full_name: string;

  @Column({ length: 255, nullable: false })
  phone_number: string;

  @Column({ length: 255, nullable: true })
  start_date: string;

  @Column({ length: 255, nullable: false })
  preferred_language: string;

  @Column({ length: 255, nullable: false })
  how_found: string;

  @Column({ default: false, nullable: true })
  newsletter_subscription: boolean;

};