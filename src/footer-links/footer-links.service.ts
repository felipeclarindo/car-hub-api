import { Injectable } from '@nestjs/common';
import { FOOTER_LINKS } from 'src/constants/footer-links.constants';
import { FooterLinkProps } from 'src/types';

@Injectable()
export class FooterLinksService {
  getFooterLinks(): FooterLinkProps[] {
    return FOOTER_LINKS;
  }
}
