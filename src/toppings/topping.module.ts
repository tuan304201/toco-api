/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ToppingController } from './topping.controller';
import { ToppingService } from './topping.service';

@Module({
  imports: [],
  controllers: [ToppingController],
  providers: [ToppingService],
})
export class ToppingModule {}
