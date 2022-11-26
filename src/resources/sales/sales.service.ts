import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/database/database.service';
import { ProductsService } from '../products/products.service';
import { TablesService } from '../tables/tables.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Injectable()
export class SalesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly productService: ProductsService,
    private readonly tableService: TablesService,
  ) { }

  async create(createSaleDto: CreateSaleDto) {
    try {

      const table = await this.databaseService.table.update({
        where: {
          name: createSaleDto.name
        },
        data: {
          is_ocupped: true
        }
      });

      let sale = await this.databaseService.sales_per_table.findFirst({
        where: {
          is_opened: false,
          AND: {
            table_id: table.id
          }
        }
      });

      if (!sale) {
        sale = await this.databaseService.sales_per_table.create({
          data: {
            is_opened: false,
            table_id: table.id
          }
        });
      }

      const product = await this.productService.findOne(+createSaleDto.productId);

      await this.databaseService.consumptions.create({
        data: {
          product_id: createSaleDto.productId,
          amount: createSaleDto.amount,
          price_product: product.price,
          sales_id: sale.id
        }
      });

      const consumed = await this.databaseService.consumptions.findMany({
        where: {
          sales_id: sale.id
        }
      });

      return consumed;

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all sales`;
  }

  async findOne(name: string) {
    try {

      const table = await this.tableService.findOne(name);

      const sale = await this.databaseService.sales_per_table.findFirst({
        where: {
          table_id: table.id,

          AND: {
            is_opened: false
          }

        }
      });

      const consumption = await this.databaseService.consumptions.findMany({
        where: {
          sales_id: sale.id
        },
        include: {
          product: { select: { description: true } }
        }
      });

      return consumption;

    } catch (error) {
      throw new Error(error);
    }
  }

  async getAccount(saleId: number) {
    try {
      const consumption = await this.databaseService.consumptions.findMany({
        where: {
          sales_id: +saleId
        }
      });

      const totalSum = consumption.reduce(
        (previousValue, currentValue) => {
          const totalCurrent = currentValue.amount * +currentValue.price_product;
          return previousValue + totalCurrent;
        }
        , 0
      );

      return totalSum;

    } catch (error) {
      throw new Error(error);
    }
  }
}
