import { Injectable } from '@nestjs/common';
import { CreateReportDto,Report, Status } from './types';

@Injectable()
export class ReportsService {
  createReport(createReportDto: CreateReportDto):Report{
    const report:Report={
      id:"123",
      status:Status.UNATTENDED,
      dateAttended: new Date().toDateString(),
      user:createReportDto.user,
      market: createReportDto.market,
      product: createReportDto.product
    }
    return report;
  }
}
