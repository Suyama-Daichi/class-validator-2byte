import { ApiProperty } from '@nestjs/swagger';
import { IsByteLength, IsNotEmpty, IsString } from 'class-validator';

export class RequestDTO {
  @ApiProperty({
    example: 'テスト',
    description: 'message (Japanese)',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(0, 6)
  message: string;
}
