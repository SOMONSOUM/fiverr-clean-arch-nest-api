import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { FindAllOptionBase } from "src/application/core/model/option_base_model";
import { UserEntity } from "src/domain/entities/user.entity";
import { IUserRepository } from "src/domain/repositories/user.repository";


export class GetManyUserUseCase
  implements IBaseUseCase<[UserEntity[], number]> {
  constructor(private userRepository: IUserRepository) { }

  execute(option: FindAllOptionBase): Promise<[UserEntity[], number]> {
    return this.userRepository.findMany(option);
  }
}
