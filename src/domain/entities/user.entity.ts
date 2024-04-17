import { Exclude } from "class-transformer";
import BaseEntity from "src/application/core/base/base_entity";

export class UserEntity extends BaseEntity {
  first_name?: string;
  last_name?: string;
  email?: string;

  @Exclude()
  password?: string

  gender?: string
  phone?: string;
  age?: number;
  country?: string;

  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial)
  }
}