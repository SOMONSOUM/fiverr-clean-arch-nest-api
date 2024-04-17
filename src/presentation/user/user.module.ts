import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/infra/models/user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { CreateUserUseCase } from "src/domain/usecases/user/create_user.usecase";
import { UserRepositoryImp } from "src/infra/repositories/user_repository";
import { IUserRepository } from "src/domain/repositories/user.repository";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { HashingService } from "src/application/common/hashing/hashing.service";
import { BcryptService } from "src/application/common/hashing/bcrypt.service";
import { UpdateUserUseCase } from "src/domain/usecases/user/update_user.usecase";
import { GetUsersUseCase } from "src/domain/usecases/user/get_users.usecase";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        global: true,
        signOptions: { expiresIn: '3d' },
      }),
      inject: [ConfigService],
    }),],
  controllers: [UserController],
  exports: [UserService],
  providers: [
    UserService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    {
      provide: UserRepositoryImp,
      useClass: UserRepositoryImp,
    },
    {
      provide: CreateUserUseCase,
      useFactory: (userRepo: IUserRepository) => {
        return new CreateUserUseCase(userRepo);
      },
      inject: [UserRepositoryImp],
    },
    {
      provide: UpdateUserUseCase,
      useFactory: (userRepo: IUserRepository) => {
        return new UpdateUserUseCase(userRepo);
      },
      inject: [UserRepositoryImp]
    },
    {
      provide: GetUsersUseCase,
      useFactory: (userRepo: IUserRepository) => {
        return new GetUsersUseCase(userRepo);
      },
      inject: [UserRepositoryImp],
    },
  ]
})

export class UserModule { }