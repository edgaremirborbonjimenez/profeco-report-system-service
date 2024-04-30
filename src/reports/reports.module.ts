import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Reports, ReportSchema} from './schemas/report.schema';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Reports.name,schema:ReportSchema}]),
    RabbitMQModule.forRoot(RabbitMQModule,{
      exchanges: [
        {
          name: 'reportsExchange',
          type: 'fanout'
        },
      ],
      uri: 'amqp://localhost:5672',
    }),],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
