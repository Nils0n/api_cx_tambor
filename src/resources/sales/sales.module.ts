import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { ProductsService } from '../products/products.service';
import { TablesService } from '../tables/tables.service';

@Module({
  controllers: [SalesController],
  providers: [SalesService, ProductsService, TablesService]
})
export class SalesModule { }
