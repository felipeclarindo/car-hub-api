import { Controller, Get } from '@nestjs/common';
import { FuelProps } from 'src/types';
import { FuelsService } from './fuels.service';

@Controller('/api/fuels')
export class FuelsController {
  constructor(private readonly fuelsService: FuelsService) {}

  @Get()
  getFuels(): FuelProps[] {
    return this.fuelsService.getFuels();
  }
}
