import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { updateOptionBase } from "src/application/core/model/option_base_model";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";

export class UpdateUserUseCase implements IBaseUseCase<UserEntity> {
  constructor(private userRepository: IUserRepository) { }

  execute(option: updateOptionBase<UserEntity>): Promise<UserEntity> {
    return this.userRepository.update(option);
  }
}
