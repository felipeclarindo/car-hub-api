import { Injectable } from '@nestjs/common';
import { MANUFACTURERS } from 'src/constants/manufacturers.constants';

@Injectable()
export class ManufacturersService {
  getManufacturers(): string[] {
    return MANUFACTURERS;
  }
}
