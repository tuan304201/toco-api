import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateProductDTO {
  @ApiProperty({
    description: 'Title of the product',
    example: 'Title of the product',
  })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Description of the product',
    example: 'Description of the product',
  })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'URL of the product',
    example: 'URL of the product',
  })
  @IsString()
  @IsOptional()
  url: string;

  @ApiProperty({
    description: 'Price of the product',
    example: 30000,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Old Price of the product',
    example: 45000,
  })
  @IsOptional()
  @IsNumber()
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
}
