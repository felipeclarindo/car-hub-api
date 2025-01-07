import { Injectable } from '@nestjs/common';
import { DescriptionProps } from './types';

@Injectable()
export class AppService {
  getDescription(): DescriptionProps {
    return {
      status: 'Api is running.',
      name: 'Car Hub Api',
      description: 'Api for car hub application.',
      endpoints: [
        {
          url: '/api/fuels',
          description: 'Get all fuels.',
          method: 'GET',
        },
        {
          url: '/api/footer-links',
          description: 'Get all footer links.',
          method: 'GET',
        },
        {
          url: '/api/years-of-production',
          description: 'Get all years of production.',
          method: 'GET',
        },
        {
          url: '/api/manufacturers',
          description: 'Get all manufacturers.',
          method: 'GET',
        },
      ],
      developer: {
        name: 'felipeclarindo',
        github: 'https://github.com/felipeclarindo',
        linkedin: 'https://linkedin.com/in/felipeclarindo',
      },
    };
  }
}
