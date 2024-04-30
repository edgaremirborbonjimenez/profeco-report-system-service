import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions} from '@nestjs/microservices';
import { GrpcReport, Rabbit } from './configs/microservice.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservicesGrpcReport = app.connectMicroservice<MicroserviceOptions>(GrpcReport);
  //const rabbitMQ = app.connectMicroservice<MicroserviceOptions>(Rabbit)
  
  await app.startAllMicroservices();
  //await app.init();
  await app.listen(3000);
}
bootstrap();