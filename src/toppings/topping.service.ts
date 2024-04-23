/*
https://docs.nestjs.com/providers#services
*/

import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InsertToppingDTO, UpdateToppingDTO } from './dto';

@Injectable()
export class ToppingService {
  constructor(public prismaService: PrismaService) {}
  async getTopping() {
    const topping = await this.prismaService.topping.findMany();
    return topping;
  }

  async insertTopping(insertToppingDto: InsertToppingDTO) {
    const topping = await this.prismaService.topping.create({
      data: {
        title: insertToppingDto.title,
        price: insertToppingDto.price,
      },
    });
    return topping;
  }

  async updateToppingById(
    toppingId: number,
    updateToppingDto: UpdateToppingDTO,
  ) {
    const topping = await this.prismaService.topping.findUnique({
      where: {
        id: toppingId,
      },
    });
    if (!topping) {
      throw new ForbiddenException('Topping not found');
    }
    return this.prismaService.topping.update({
      where: {
        id: toppingId,
      },
      data: {
        title: updateToppingDto.title,
        price: updateToppingDto.price,
      },
    });
  }

  async deleteToppingById(toppingId: number) {
    const topping = await this.prismaService.topping.findUnique({
      where: {
        id: toppingId,
      },
    });
    if (!topping) {
      throw new ForbiddenException('Topping not found');
    }
    return this.prismaService.topping.delete({
      where: {
        id: toppingId,
      },
    });
  }
}
