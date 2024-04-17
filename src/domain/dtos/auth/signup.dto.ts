import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  readonly first_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 100)
  readonly last_name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(5, 50)
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  password: string;
}
