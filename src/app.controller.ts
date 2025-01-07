import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DescriptionProps } from './types';

@Controller('/api/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDescriptions(): DescriptionProps {
    return this.appService.getDescription();
  }
}
