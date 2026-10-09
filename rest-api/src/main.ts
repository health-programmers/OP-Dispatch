import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.PORT ?? 3000);

  app.enableCors({
    origin: process.env.WEB_APP_ORIGIN ?? 'http://localhost:5173',
  });

  await app.listen(port, '0.0.0.0');
}

void bootstrap();
