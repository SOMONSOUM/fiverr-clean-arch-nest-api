import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  readonly first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  readonly last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(5, 50)
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(6, 100)
  readonly password: string;
}
