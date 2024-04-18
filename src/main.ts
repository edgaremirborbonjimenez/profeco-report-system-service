import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { grpcOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname,`../proto/report.proto`),
        package: 'report',
        url: 'localhost:50052',
      }
    }
  );
  await app.listen();
}
bootstrap();
/*
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcOptions);
  await app.listen(50052);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
*/