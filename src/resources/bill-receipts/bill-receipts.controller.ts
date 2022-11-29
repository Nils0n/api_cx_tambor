import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillReceiptsService } from './bill-receipts.service';
import { CreateBillReceiptDto } from './dto/create-bill-receipt.dto';

@Controller('api/bill-receipts')
export class BillReceiptsController {
  constructor(private readonly billReceiptsService: BillReceiptsService) { }

  @Post()
  async create(@Body() params: CreateBillReceiptDto) {
    try {
      return await this.billReceiptsService.create(params);
    } catch (error) {
      throw new Error(error);
    }
  }

}
