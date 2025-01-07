import { Module } from '@nestjs/common';
import { YearsOfProductionController } from './years-of-production.controller';
import { YearsOfProductionService } from './years-of-production.service';

@Module({
  imports: [],
  controllers: [YearsOfProductionController],
  providers: [YearsOfProductionService],
})
export class YearOfProductionModule {}
