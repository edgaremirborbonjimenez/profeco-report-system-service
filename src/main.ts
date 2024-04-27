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

  console.log(`LISTENING IN PORT ${50052}`)
}
bootstrap();