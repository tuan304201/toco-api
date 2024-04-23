import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class InsertProductDTO {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Title of the product',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'Description of the product',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'URL of the product',
    example: 'URL of the product',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 25000,
  })
  @IsNotEmpty()
  @IsInt()
  price: number;

  @ApiProperty({
    description: 'Old Price of the product',
    example: 35000,
  })
  @IsOptional()
  @IsInt()
  price_old: number;

  @ApiProperty({
    description: 'Tag of the product',
    example: 'New',
  })
  @IsOptional()
  @IsString()
  tagNew: string;

  @ApiProperty({
    description: 'Tag of the product',
    example: '22%',
  })
  @IsOptional()
  @IsString()
  tagDiscount: string;

  @ApiProperty({
    description: 'Category of the product',
    example: 'Hot',
  })
  @IsNotEmpty()
  @IsString()
  category: number;
}
