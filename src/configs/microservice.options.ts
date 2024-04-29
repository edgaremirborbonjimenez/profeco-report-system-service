import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const GrpcReport:MicroserviceOptions ={
  transport: Transport.GRPC,
  options: {
    protoPath: join(`./proto/report.proto`),
    package: 'report',
    url: 'localhost:50052',
  }
}

export const Rabbit:MicroserviceOptions ={
  transport: Transport.RMQ,
  options:{
    urls: ['amqp://localhost:5672'],
    queue: 'report_queue',
    //noAck: false,
    queueOptions:{
      durable: true
    }
  }
}