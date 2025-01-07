import { Controller, Get } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';

@Controller('/api/manufacturers')
export class ManufacturersController {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Get()
  getManufacturers(): string[] {
    return this.manufacturersService.getManufacturers();
  }
}
