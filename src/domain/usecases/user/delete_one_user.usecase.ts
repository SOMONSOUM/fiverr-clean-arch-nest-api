import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";

export class DeleteOneUserUseCase implements IBaseUseCase<boolean> {
  constructor(private readonly userRepository: IUserRepository) { }

  execute(filter: Partial<UserEntity>): Promise<boolean> {
    return this.userRepository.deleteOne(filter)
  }
}