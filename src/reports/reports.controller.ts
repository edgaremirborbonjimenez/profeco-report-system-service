import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './types';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @GrpcMethod('ReportService','CreateReport')
  createReport(data:CreateReportDto){
    console.log("Report")
    return this.reportsService.createReport(data);
  }

  @GrpcMethod('ReportService','CreateReport')
  findReportsByMarket(data:CreateReportDto,metadata: Metadata,call:ServerUnaryCall<any,any>){
    //return this.reportsService.create(createReportDto);
  }
}
