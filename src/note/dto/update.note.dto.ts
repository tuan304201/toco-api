import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateNoteDTO {
  @ApiProperty({
    description: 'Title of the note',
    example: 'Title of the note',
  })
  @IsString()
  @IsOptional()
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
  @IsString()
  @IsOptional()
  url: string;
}
