import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class InsertNoteDTO {
  @ApiProperty({
    description: 'Title of the note',
    example: 'Title of the note',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Description of the note',
    example: 'Description of the note',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'URL of the note',
    example: 'URL of the note',
  })
  @IsNotEmpty()
  @IsString()
  url: string;
}
