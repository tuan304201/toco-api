import { PrismaService } from './../prisma/prisma.service';
/*
https://docs.nestjs.com/providers#services
*/

import { ForbiddenException, Injectable } from '@nestjs/common';
import { InsertNoteDTO, UpdateNoteDTO } from './dto';

@Injectable()
export class NoteService {
  constructor(public prismaService: PrismaService) {}
  async insertNote(userId: number, insertNoteDto: InsertNoteDTO) {
    const note = await this.prismaService.note.create({
      data: {
        title: insertNoteDto.title,
        description: insertNoteDto.description,
        url: insertNoteDto.url,
        user: {
          connect: { id: userId },
        },
      },
    });
    return note;
  }
  async getNotes(userId: number) {
    const note = await this.prismaService.note.findMany({
      where: {
        userId: userId,
      },
    });
    if (!note) {
      throw new ForbiddenException('Note empty');
    }
    return note;
  }

  async getNoteById(noteId: number) {
    const note = await this.prismaService.note.findFirst({
      where: {
        id: noteId,
      },
    });
    if (!note) {
      throw new ForbiddenException('Note not found');
    }
    return note;
  }

  async updateNoteById(noteId: number, updateNoteDto: UpdateNoteDTO) {
    const note = await this.prismaService.note.findUnique({
      where: {
        id: noteId,
      },
    });
    if (!note) {
      throw new ForbiddenException('Note not found');
    }
    return this.prismaService.note.update({
      where: {
        id: noteId,
      },
      data: {
        title: updateNoteDto.title,
        description: updateNoteDto.description,
        url: updateNoteDto.url,
      },
    });
  }

  async deleteNoteById(noteId: number) {
    const note = await this.prismaService.note.findUnique({
      where: {
        id: noteId,
      },
    });
    if (!note) {
      throw new ForbiddenException('Note not found');
    }
    return this.prismaService.note.delete({
      where: {
        id: noteId,
      },
    });
  }
}
