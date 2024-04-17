import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { FindOneByIdOptionBase } from "src/application/core/model/option_base_model";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";

export class GetUserByIdUseCase implements IBaseUseCase<UserEntity> {
  constructor(private readonly userRepository: IUserRepository) { }

  execute(option: FindOneByIdOptionBase): Promise<UserEntity> {
    return this.userRepository.findById(option);
  }
}