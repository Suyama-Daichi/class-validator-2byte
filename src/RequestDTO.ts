import { IsByteLength, IsDefined, IsString } from 'class-validator';

export class RequestDTO {
  @IsDefined()
  @IsString()
  @IsByteLength(1, 10)
  name: string;
}
