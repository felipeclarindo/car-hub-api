import { Controller, Get } from '@nestjs/common';
import { YearsOfProductionProps } from 'src/types';
import { YearsOfProductionService } from './years-of-production.service';

@Controller('/api/years-of-production')
export class YearsOfProductionController {
  constructor(
    private readonly yearsOfProductionService: YearsOfProductionService,
  ) {}

  @Get()
  getYearsOfProduction(): YearsOfProductionProps[] {
    return this.yearsOfProductionService.getYearsOfProduction();
  }
}
