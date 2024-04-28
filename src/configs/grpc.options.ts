import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const grpcOptions:ClientOptions =     {
  transport: Transport.GRPC,
  options: {
    protoPath: join(__dirname,`../proto/report.proto`),
    package: 'report',
    url: 'localhost:50052',
  }
}