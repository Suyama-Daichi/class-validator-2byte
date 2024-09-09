import { Body, Controller, Post } from '@nestjs/common';
import { RequestDTO } from './RequestDTO';
import { ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @ApiOperation({ summary: 'Post name' })
  @Post()
  postName(@Body() body: RequestDTO) {
    return body;
  }
}
