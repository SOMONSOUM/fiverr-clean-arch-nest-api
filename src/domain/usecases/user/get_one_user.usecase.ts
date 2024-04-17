import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { FindOneOptionBase } from "src/application/core/model/option_base_model";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";


export class GetOneUserUseCase implements IBaseUseCase<UserEntity> {
  constructor(private userRepository: IUserRepository) { }

  execute(option: FindOneOptionBase<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(option);
  }
}
