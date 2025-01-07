import { Controller, Get } from '@nestjs/common';
import { FooterLinksService } from './footer-links.service';
import { FooterLinkProps } from 'src/types';

@Controller('/api/footer-links')
export class FooterLinksController {
  constructor(private readonly footerLinksService: FooterLinksService) {}

  @Get()
  getFooterLinks(): FooterLinkProps[] {
    return this.footerLinksService.getFooterLinks();
  }
}
