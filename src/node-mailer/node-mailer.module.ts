import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NodeMailerService } from './node-mailer.service';

@Module({
  imports:[
    MailerModule.forRootAsync({
      useClass: NodeMailerService
    })
  ]
})
export class NodeMailerModule {}
