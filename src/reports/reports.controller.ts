import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { ReportsService } from './reports.service';
import { CreateReportDto, Report } from './types';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @GrpcMethod('ReportService','CreateReport')
  createReport(data:CreateReportDto):Promise<Report>{
    console.log("Nueva peticion:")
    console.log(data);
    console.log("--------------------------------")
    const report:Report = this.reportsService.createReport(data);
    console.log('Report')
    console.log(report);
    console.log("--------------------------------")
    return Promise.resolve(report);
  }
}
