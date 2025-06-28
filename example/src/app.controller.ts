import { ERROR_DESCRIPTIONS, SwaggerDocumentation } from '@globalart/nest-swagger';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SwaggerDocumentation({
    endpointDescription: 'Example description',
    endpointSummary: 'Example summary',
    error400Description: ERROR_DESCRIPTIONS.BAD_REQUEST,
    error401Description: ERROR_DESCRIPTIONS.UNAUTHORIZED,
    error403Description: ERROR_DESCRIPTIONS.FORBIDDEN,
    error404Description: ERROR_DESCRIPTIONS.NOT_FOUND,
    error429Description: ERROR_DESCRIPTIONS.RATE_LIMIT_EXCEEDED,
    error500Description: ERROR_DESCRIPTIONS.INTERNAL_SERVER_ERROR
  })
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
