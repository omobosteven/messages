import { Module } from '@nestjs/common';
import { MessagesController } from 'src/messages/messages.controller';
import { MessagesService } from 'src/messages/messages.service';
import { MessagesRepository } from 'src/messages/messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
