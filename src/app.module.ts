import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelModule } from './channel/channel.module';
import { EpisodeModule } from './episode/episode.module';
import { AccountModule } from './account/account.module';
import { FeedModule } from './feed/feed.module';
import { FileModule } from './file/file.module';

dotenv.config();

@Module({
    imports: [ChannelModule, EpisodeModule, AccountModule, FeedModule, FileModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
