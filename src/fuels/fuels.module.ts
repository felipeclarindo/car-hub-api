import { Module } from '@nestjs/common';
import { FuelsController } from './fuels.controller';
import { FuelsService } from './fuels.service';

@Module({
  imports: [],
  controllers: [FuelsController],
  providers: [FuelsService],
})
export class FuelsModule {}
