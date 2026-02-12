import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): { status: string; message: string } {
    return {
      status: 'OK',
      message: 'Test endpoint is working',
    };
  }
}
