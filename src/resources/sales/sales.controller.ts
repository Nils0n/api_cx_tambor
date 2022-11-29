import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
// import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('api/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Post()
  async create(@Body() createSaleDto: CreateSaleDto) {
    try {
      console.log(createSaleDto);
      return await this.salesService.create(createSaleDto);
    } catch (error) {
      throw new Error(error);
    }

  }



  @Get(':name')
  async findOne(@Param('name') name: string) {
    try {
      return await this.salesService.findOne(name);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get('get-account/:saleId')
  async getAccount(@Param('saleId') saleId: number) {
    try {
      return await this.salesService.getAccount(+saleId);
    } catch (error) {
      throw new Error(error);
    }
  }

}
