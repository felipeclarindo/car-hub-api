import { Injectable } from '@nestjs/common';
import { FUELS } from 'src/constants/fuels.constants';
import { FuelProps } from 'src/types';

@Injectable()
export class FuelsService {
  getFuels(): FuelProps[] {
    return FUELS;
  }
}
