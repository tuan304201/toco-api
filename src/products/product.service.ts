import { PrismaService } from '../prisma/prisma.service';
/*
https://docs.nestjs.com/providers#services
*/

import { ForbiddenException, Injectable } from '@nestjs/common';
import { InsertProductDTO, UpdateProductDTO } from './dto';

@Injectable()
export class ProductService {
  constructor(public prismaService: PrismaService) {}
  async insertProduct(insertProductDto: InsertProductDTO) {
    const product = await this.prismaService.product.create({
      data: {
        title: insertProductDto.title,
        description: insertProductDto.description,
        url: insertProductDto.url,
        price: insertProductDto.price,
        price_old: insertProductDto.price_old,
        tagNew: insertProductDto.tagNew,
        tagDiscount: insertProductDto.tagDiscount,
        category: insertProductDto.category,
      },
    });
    return product;
  }
  async getProducts() {
    const product = await this.prismaService.product.findMany();
    return product;
  }

  async getProductById(productId: number) {
    const product = await this.prismaService.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!product) {
      throw new ForbiddenException('Product not found');
    }
    return product;
  }

  async updateProductById(
    productId: number,
    updateProductDto: UpdateProductDTO,
  ) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      throw new ForbiddenException('Product not found');
    }
    return this.prismaService.product.update({
      where: {
        id: productId,
      },
      data: {
        title: updateProductDto.title,
        description: updateProductDto.description,
        url: updateProductDto.url,
      },
    });
  }

  async deleteProductById(productId: number) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) {
      throw new ForbiddenException('Product not found');
    }
    return this.prismaService.product.delete({
      where: {
        id: productId,
      },
    });
  }
}
