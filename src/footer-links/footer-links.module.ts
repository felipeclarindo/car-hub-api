import { Module } from '@nestjs/common';
import { FooterLinksController } from './footer-links.controller';
import { FooterLinksService } from './footer-links.service';

@Module({
  imports: [],
  controllers: [FooterLinksController],
  providers: [FooterLinksService],
})
export class FooterLinksModule {}
