import { Injectable } from '@nestjs/common';
import { DescriptionProps } from './types';

@Injectable()
export class AppService {
  getDescription(): DescriptionProps {
    return {
      status: 'Api is running.',
      name: 'Car Hub Api',
      description: 'Api for car hub application.',
      developer: {
        name: 'felipeclarindo',
        github: 'https://github.com/felipeclarindo',
        linkedin: 'https://linkedin.com/in/felipeclarindo',
      },
    };
  }
}
