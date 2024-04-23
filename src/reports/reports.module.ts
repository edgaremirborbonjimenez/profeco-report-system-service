import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Reports, ReportSchema} from './schemas/report.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Reports.name,schema:ReportSchema}])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
