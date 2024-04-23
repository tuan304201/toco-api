/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ToppingService } from './topping.service';
import { InsertToppingDTO, UpdateToppingDTO } from './dto';

@ApiTags('Topping')
@Controller('topping')
export class ToppingController {
  constructor(private toppingService: ToppingService) {}
  @Get()
  getTopping() {
    return this.toppingService.getTopping();
  }

  @Post()
  insertTopping(@Body() insertProductDto: InsertToppingDTO) {
    return this.toppingService.insertTopping(insertProductDto);
  }

  @Patch(':id')
  updateToppingById(
    @Param('id', ParseIntPipe) toppingId: number,
    @Body() updateToppingDTO: UpdateToppingDTO,
  ) {
    return this.toppingService.updateToppingById(toppingId, updateToppingDTO);
  }

  @Delete(':id')
  deleteToppingById(@Param('id', ParseIntPipe) toppingId: number) {
    return this.toppingService.deleteToppingById(toppingId);
  }
}
