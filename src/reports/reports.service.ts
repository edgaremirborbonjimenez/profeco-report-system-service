import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './input-types/types';

@Injectable()
export class ReportsService {
  createReport(createReportDto: CreateReportDto) {
    return 'This action creates a new report';
  }
}
