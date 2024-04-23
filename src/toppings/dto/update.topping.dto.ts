import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateToppingDTO {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Title of the product',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 25000,
  })
  @IsNotEmpty()
  @IsInt()
  price: number;
}
