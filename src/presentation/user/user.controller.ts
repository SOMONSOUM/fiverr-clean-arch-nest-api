import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EndPoint } from 'src/application/config/enum/endpoint';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/domain/dtos/user/create_user.dto';
import { UserEntity } from 'src/domain/entities/user.entity';
import { ApiBadRequestResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HashingService } from 'src/application/common/hashing/hashing.service';
import { Version } from 'src/application/config/enum/verion';
import { UpdateUserDto } from 'src/domain/dtos/user/update_user.dto';
import { currentTimestamp } from 'src/application/core/utilities/current_timestamp';

@ApiTags('auth')
@Controller({
  path: EndPoint.userPrefix,
  version: Version.apiVersion,
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly hashingService: HashingService,
  ) { }

  @ApiOperation({ summary: 'Create new user' })
  @ApiBadRequestResponse({ description: 'Email already exist.' })
  @Post()
  async createUserControler(@Body() createUserDto: CreateUserDto) {
    const input = new UserEntity({
      first_name: createUserDto.first_name,
      last_name: createUserDto.last_name,
      email: createUserDto.email,
      password: await this.hashingService.hash(createUserDto.password),
    });

    const result = await this.userService.createUserService(input);

    return {
      status: true,
      result,
    };
  }

  @ApiOperation({ summary: 'Update user' })
  @Put(EndPoint.id)
  async updateUserController(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const input = new UserEntity({
      first_name: updateUserDto.first_name,
      last_name: updateUserDto.last_name,
      email: updateUserDto.email,
      gender: updateUserDto.gender,
      phone: updateUserDto.phone,
      age: updateUserDto.age,
      country: updateUserDto.country,
      updated_at: currentTimestamp(),
    });

    const result = await this.userService.updateUserService({
      id,
      params: input,
    });

    return {
      status: true,
      result,
    };
  }

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async getUsersController(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    const [result, length] = await this.userService.getUsersService({
      pagination: {
        limit: parseInt(limit),
        page: parseInt(page),
      },
    });

    return {
      status: true,
      length: length,
      result: result,
    };
  }
}
