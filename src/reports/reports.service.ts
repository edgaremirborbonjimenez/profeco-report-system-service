import { Injectable } from '@nestjs/common';
import { CreateReportDto,FindReportById,FindReportsByMarketDto,ReportsList } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Reports, Status } from './schemas/report.schema';
import { Model } from 'mongoose';
import {
  GrpcNotFoundException,
  GrpcInvalidArgumentException,
} from "nestjs-grpc-exceptions";

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Reports.name) private reportsModel:Model<Reports>){}

  async create(createReportDto:CreateReportDto):Promise<Reports>{
    if(!createReportDto.market || !createReportDto.product || !createReportDto.user){
      throw new GrpcInvalidArgumentException("empty params");
    }
    const report:Reports = {
      reason: createReportDto.reason,
      status: Status.UNATTENDED,
      dateAttended: new Date().toDateString(),
      user: createReportDto.user,
      market: createReportDto.market,
      product: createReportDto.product
    }
    const createdReport = new this.reportsModel(report);
    const savedReport = await createdReport.save();
    return savedReport;
  }

  
async findReportByMarketId(data:FindReportsByMarketDto):Promise<ReportsList>{

  if(!data.id || !data.limit || !data.page){
    throw new GrpcInvalidArgumentException("empty params");
  }
  const query = {'market.id':data.id};

  const reports:Array<Reports> = await this.reportsModel
    .find(query)
    .skip((data.page-1)*data.limit)
    .limit(data.limit)
    .exec();
  const reportes:ReportsList = {
    reports: reports
  };
    return reportes;
}

async getReportById(data:FindReportById):Promise<Reports>{
  if(!data.id){
    throw new GrpcInvalidArgumentException("empty params");
  }

  const report:Reports = await this.reportsModel.findById(data.id);
  return report;
}
}
