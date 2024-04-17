import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { FindAllOptionTypOrmModel, UpdateOptionTypeOrmModel } from "src/application/core/model/options_typeorm_model";
import { UserEntity } from "src/domain/entities/user.entity";
import { CreateUserUseCase } from "src/domain/usecases/user/create_user.usecase";
import { GetUsersUseCase } from "src/domain/usecases/user/get_users.usecase";
import { UpdateUserUseCase } from "src/domain/usecases/user/update_user.usecase";

@Injectable()
export class UserService {
  constructor(private readonly jwtService: JwtService,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly getUsersUsecase: GetUsersUseCase,
  ) { }

  async createUserService(params: UserEntity): Promise<UserEntity> {
    return this.createUserUseCase.execute(params)
  }

  async updateUserService(option: UpdateOptionTypeOrmModel<UserEntity>): Promise<UserEntity> {
    if (!option.id) {
      throw new BadRequestException(`id is required`);
    }

    const result = await this.updateUserUseCase.execute(option)

    if (!result) {
      throw new BadRequestException(`User ${option.id} is not exist`);
    }

    return result;
  }

  async getUsersService(option: FindAllOptionTypOrmModel<UserEntity>): Promise<[UserEntity[], number]> {
    return this.getUsersUsecase.execute(option);
  }
}