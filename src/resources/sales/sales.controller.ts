import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

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

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    try {
      return await this.salesService.findOne(name);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}
