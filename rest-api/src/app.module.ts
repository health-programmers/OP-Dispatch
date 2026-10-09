import { Module } from '@nestjs/common';
import { HealthController } from './shared/health.controller';

@Module({
  controllers: [HealthController],
})
export class AppModule {}
