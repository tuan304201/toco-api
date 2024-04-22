import { PrismaModule } from './prisma/prisma.module';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, NoteModule, UserModule, AuthModule],
})
export class AppModule {}
