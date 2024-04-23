import { ToppingModule } from './toppings/topping.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ToppingModule, PrismaModule, ProductModule, UserModule, AuthModule],
})
export class AppModule {}
