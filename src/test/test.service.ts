import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): { status: string; message: string; description: string } {
    return {
      status: 'OK',
      message: 'Test endpoint is working',
      description:
        'This is a proove that everything is working between the front-back integration',
    };
  }
}
