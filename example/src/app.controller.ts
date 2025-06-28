import { SwaggerDocumentation } from '@globalart/nest-swagger';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SwaggerDocumentation({
    endpointDescription: 'test',
    endpointSummary: 'test',
  })
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
