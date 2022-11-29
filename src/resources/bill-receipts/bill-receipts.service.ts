import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/database/database.service';
import { CreateBillReceiptDto } from './dto/create-bill-receipt.dto';

@Injectable()
export class BillReceiptsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(params: CreateBillReceiptDto) {
    try {
      const receipt = await this.databaseService.bill_receipt.create({
        data: {
          sales_id: +params.salesId,
          total_price: +params.totalPrice,
          received: +params.received,
          change: +params.change
        }
      });

      const salesPerTable = await this.databaseService.sales_per_table.update({
        where: {
          id: +params.salesId,
        },
        data: {
          is_closed: true,
        }
      });

      const table = await this.databaseService.table.update({
        where: {
          id: salesPerTable.table_id,
        },
        data: {
          is_ocupped: false,
        }
      });


    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all billReceipts`;
  }
}
