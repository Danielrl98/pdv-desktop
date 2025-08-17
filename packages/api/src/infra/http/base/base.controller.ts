import { Controller } from '@nestjs/common';

@Controller()
export class BaseController {
  constructor(private readonly service: any) {}

  create() {
    //
  }
}
