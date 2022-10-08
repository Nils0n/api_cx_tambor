import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/core/database/database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly dataBaseService: DatabaseService) { }

  async getProducts() {
    try {

      const products = await this.dataBaseService.product.findMany();
      return products;

    } catch (error) {
      throw new Error(error);
    }
  }

  async create(createProductDto: CreateProductDto) {
    try {

      const product = await this.dataBaseService.product.create({
        data: {
          description: createProductDto.description,
          price: +createProductDto.price
        }
      });

      return product;

    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(updateProductDto: UpdateProductDto) {
    try {

      const product = await this.dataBaseService.product.update({
        where: {
          id: +updateProductDto.id,
        },
        data: {
          price: +updateProductDto.price
        }
      });

      return product;

    } catch (error) {
      throw new Error(error);
    }
  }

}
