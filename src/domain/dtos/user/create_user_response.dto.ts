import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CreateUserResponseDto {
  @ApiProperty()
  @Expose()
  access_token: string;

  @ApiProperty()
  @Expose()
  refresh_token: string;
}
