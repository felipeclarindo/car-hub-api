import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuelsController } from './fuels/fuels.controller';
import { FooterLinksController } from './footer-links/footer-links.controller';
import { ManufacturersController } from './manufacturers/manufacturers.controller';
import { YearsOfProductionController } from './years-of-production/years-of-production.controller';
import { FooterLinksService } from './footer-links/footer-links.service';
import { ManufacturersService } from './manufacturers/manufacturers.service';
import { YearsOfProductionService } from './years-of-production/years-of-production.service';
import { FuelsService } from './fuels/fuels.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    FuelsController,
    FooterLinksController,
    ManufacturersController,
    YearsOfProductionController,
  ],
  providers: [
    AppService,
    FooterLinksService,
    ManufacturersService,
    YearsOfProductionService,
    FuelsService,
  ],
})
export class AppModule {}
