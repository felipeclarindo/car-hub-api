import { Injectable } from '@nestjs/common';
import { YEARS_OF_PRODUCTION } from 'src/constants/years-of-production.constants';
import { YearsOfProductionProps } from 'src/types';

@Injectable()
export class YearsOfProductionService {
  getYearsOfProduction(): YearsOfProductionProps[] {
    return YEARS_OF_PRODUCTION;
  }
}
