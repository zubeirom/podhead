import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelModule } from './channel/channel.module';
import { EpisodeModule } from './episode/episode.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ChannelModule, EpisodeModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
