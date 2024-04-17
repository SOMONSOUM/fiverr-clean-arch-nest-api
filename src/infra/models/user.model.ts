import { Column, Entity } from "typeorm";
import { BaseModel } from "./base.model";
import { UserEntity } from "src/domain/entities/user.entity";
import { Gender } from "src/application/config/enum/gender";

@Entity('users')
export class User extends BaseModel implements UserEntity {
  @Column({
    type: 'varchar',
    length: 225,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 225,
  })
  last_name: string;

  @Column({
    type: "varchar",
    length: 225,
    unique: true
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Male,
  })
  gender: Gender;

  @Column({ type: 'varchar', nullable: true, length: 50 })
  phone: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'varchar', length: 225, nullable: true })
  country: string;
}