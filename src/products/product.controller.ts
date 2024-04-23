/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { InsertProductDTO, UpdateProductDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
// @UseGuards(AuthGuard('jwt'))
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) productId: number) {
    return this.productService.getProductById(productId);
  }

  @Post()
  insertProduct(@Body() insertProductDto: InsertProductDTO) {
    return this.productService.insertProduct(insertProductDto);
  }

  @Patch(':id')
  updateProductById(
    @Param('id', ParseIntPipe) productId: number,
    @Body() updateProductDto: UpdateProductDTO,
  ) {
    return this.productService.updateProductById(productId, updateProductDto);
  }

  @Delete(':id')
  deleteProductById(@Param('id', ParseIntPipe) productId: number) {
    return this.productService.deleteProductById(productId);
  }
}
