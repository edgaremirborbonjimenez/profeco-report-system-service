import { Injectable } from '@nestjs/common';
import { CreateReportDto,Report, Status } from './types';

@Injectable()
export class ReportsService {
  createReport(createReportDto: CreateReportDto):Report{
    console.log(createReportDto)
    console.log("Reporte");
    const report:Report={
      id:"123",
      status:Status.UNATTENDED,
      date_attended: new Date(),
      user:{
        id:"123",
        names:"asda",
        lastnames: "asda",
        email: "asdas"
    },
    market: {
        id: "123",
        name: "ferfw",
        url_img: "rewerqwe"
    },
    product: {
        id: "dfqwef",
        brand: "wdasdqa",
        name: "wefasd",
        url_img: "dfawe"
    }
    }
    console.log("Reporte");
    console.log(report);
    return report;
  }
}
