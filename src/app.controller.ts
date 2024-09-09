import { Body, Controller } from '@nestjs/common';
import { RequestDTO } from './RequestDTO';

@Controller()
export class AppController {
  constructor() {}

  postName(@Body() body: RequestDTO) {
    return body;
  }
}
