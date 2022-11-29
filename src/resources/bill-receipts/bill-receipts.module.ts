import { Module } from '@nestjs/common';
import { BillReceiptsService } from './bill-receipts.service';
import { BillReceiptsController } from './bill-receipts.controller';

@Module({
  controllers: [BillReceiptsController],
  providers: [BillReceiptsService]
})
export class BillReceiptsModule {}
