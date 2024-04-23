import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ReportsModule,MongooseModule.forRoot('mongodb://127.0.0.1:27023/reports')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
