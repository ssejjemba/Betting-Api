import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  getHello(): string {
    const databaseName: string = this.config.get('POSTGRES_DB_NAME');

    console.log({ databaseName });
    return 'Hello World!';
  }
}
