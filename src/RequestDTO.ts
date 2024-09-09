import { ApiProperty } from '@nestjs/swagger';
import { IsByteLength, IsNotEmpty, IsString } from 'class-validator';

export class RequestDTO {
  @ApiProperty({
    description: '同期したい指標メタデータの配列',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1, 10)
  name: string;
}
