import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';

@Controller('api/tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) { }

  @Post('create-tables')
  async create(@Body() createTableDto: CreateTableDto) {
    try {
      return await this.tablesService.createTables(createTableDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.tablesService.findAll();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
