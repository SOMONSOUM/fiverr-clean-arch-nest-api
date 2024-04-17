import { IBaseUseCase } from "src/application/core/base/base_usecase";
import { IUserRepository } from "src/domain/repositories/user.repository";


export class DeleteUserUseCase implements IBaseUseCase<boolean> {
  constructor(private userRepository: IUserRepository) { }

  execute(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
