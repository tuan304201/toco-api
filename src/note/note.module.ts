import { NoteService } from './note.service';
import { NoteController } from './note.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
