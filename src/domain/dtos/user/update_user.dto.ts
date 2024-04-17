import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Gender } from 'src/application/config/enum/gender';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 100)
  readonly first_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2, 100)
  readonly last_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsEmail()
  @Length(5, 50)
  readonly email: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Gender)
  readonly gender: Gender;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(1)
  readonly age: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly country: string;
}
