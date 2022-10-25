import { Controller, Get, Post, Body, BadRequestException, Patch, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get('id')
  async findOne(@Param() id: number) {
    try {
      return await this.productsService.findOne(+id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }



  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch()
  async updateProduct(@Body() updateProductDto: UpdateProductDto) {
    try {
      return await this.productsService.updateProduct(updateProductDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

}
