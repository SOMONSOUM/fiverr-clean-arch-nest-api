import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";

export class CreateUserUseCase implements IBaseUseCase<UserEntity> {
  constructor(private readonly userRepository: IUserRepository) { }

  execute(params: UserEntity): Promise<UserEntity> {
    return this.userRepository.create(params)
  }
}