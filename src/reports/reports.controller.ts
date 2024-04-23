import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReportsService } from './reports.service';
import { CreateReportDto, FindReportsByMarketDto, ReportsList } from './types';
import { Reports } from './schemas/report.schema';

@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @GrpcMethod('ReportService','CreateReport')
  createReport(data:CreateReportDto):Promise<Reports>{
    return this.reportsService.create(data);
  }

  @GrpcMethod('ReportService','FindReportsByMarket')
  findReportsByMarketId(data:FindReportsByMarketDto):Promise<ReportsList>{
    return this.reportsService.findReportByMarketId(data);
  }
}
